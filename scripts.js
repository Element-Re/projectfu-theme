const rimraf = require('rimraf');
const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const distPath = path.join(__dirname, 'dist');
const langPath = path.join(__dirname, 'lang');
const modulePath = path.join(__dirname, 'module');
const assetsPath = path.join(__dirname, 'assets');
const stylesPath = path.join(__dirname, 'styles');
const templatesPath = path.join(__dirname, 'templates');
const filesToCopy = ['module.json', 'CHANGELOG.MD', 'README.MD', 'projectfu-theme.mjs', 'projectfu-theme.lock'];

const copyFolder = (source, destination) => {
  return new Promise((resolve, reject) => {
    ncp(source, destination, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const copyFile = (source, destination) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, destination, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const build = async () => {
  try {
    // Clear and recreate /dist
    rimraf.sync(distPath);
    fs.mkdirSync(distPath);

    // Folders
    await copyFolder(langPath, path.join(distPath, 'lang'));
    await copyFolder(modulePath, path.join(distPath, 'module'));
    await copyFolder(assetsPath, path.join(distPath, 'assets'));
    await copyFolder(stylesPath, path.join(distPath, 'styles'));
    await copyFolder(templatesPath, path.join(distPath, 'templates'));

    // Standalone files
    for (const file of filesToCopy) {
      const source = path.join(__dirname, file);
      if (fs.existsSync(source)) {
        await copyFile(source, path.join(distPath, file));
      } else {
        console.warn(`Warning: ${file} does not exist and will be skipped.`);
      }
    }

    console.log('Build completed successfully!');
  } catch (err) {
    console.error('Build failed:', err);
  }
};

function getDataPath() {
  const config = fs.readJSONSync('foundryconfig.json');

  if (config?.dataPath) {
    if (!fs.existsSync(path.resolve(config.dataPath))) {
      throw new Error('User Data path invalid, no Data directory found');
    }

    return path.resolve(config.dataPath);
  } else {
    throw new Error('No User Data path defined in foundryconfig.json');
  }
}

function getProjectName() {
  const packageJson = fs.readJSONSync('package.json');
  if (packageJson?.name) {
    return packageJson.name;
  } else {
    throw new Error('Project name not found in package.json');
  }
}

const link = async (clean) => {
  const sourceDirectory = distPath;
  let destinationDirectory;
  if (fs.existsSync(path.resolve(sourceDirectory, 'module.json'))) {
    destinationDirectory = 'modules';
  } else {
    throw new Error('Could not find module.json');
  }

  const projectName = getProjectName();
  const linkDirectory = path.resolve(getDataPath(), 'Data', destinationDirectory, projectName);

  if (clean) {
    console.log(`Removing build in ${linkDirectory}.`);
    await fs.remove(linkDirectory);
  } else if (!fs.existsSync(linkDirectory)) {
    console.log(`Linking dist to ${linkDirectory}.`);
    await fs.ensureDir(path.resolve(linkDirectory, '..'));
    await fs.symlink(sourceDirectory, linkDirectory);
  }
};

const watchPaths = [langPath, modulePath, assetsPath, stylesPath, templatesPath, ...filesToCopy.map(file => path.join(__dirname, file))];

const startWatching = () => {
  chokidar.watch(watchPaths).on('change', (changed) => {
    console.log(`File ${path.basename(changed)} has been changed. Rebuilding...`);
    build();
  });
};

yargs(hideBin(process.argv))
  .command('build', 'Build the project', (yargs) => {
    return yargs.option('watch', {
      alias: 'w',
      type: 'boolean',
      description: 'Watch for changes and rebuild automatically',
    });
  }, async (argv) => {
    await build();
    if (argv.watch) {
      startWatching();
      console.log('Watching for changes...');
    }
  })
  .command('link', 'Link the project', (yargs) => {
    return yargs.option('clean', {
      alias: 'c',
      type: 'boolean',
      description: 'Remove existing build before linking',
    });
  }, async (argv) => {
    await link(argv.clean);
  })
  .demandCommand(1, 'You need to specify a command (either "build" or "link")')
  .help()
  .argv;