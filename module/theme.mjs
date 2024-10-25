import { deepFreeze, readTextFromFile } from './helpers.mjs';
import { MODULE } from './settings.mjs';
import { TEMPLATES } from './templates.mjs';

/**
 * A Theme that can be applied to the game world.
 */
export class Theme {

  /**
   * Creates a Theme instance.
   * @param {object} data The data to construct the Theme from.
   */
  constructor(data = {}) {
    Object.keys(this).forEach(key => {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    });
  }

  /**
   * Convenient factory method for getting a Theme instance from passed in data.
   * 
   * @param {*} themeData 
   * @returns {Theme} The passed in themeData if it was already an instance of Theme, or a Theme generated from the themeData.
   */
  static from(themeData) {
    return themeData instanceof Theme ? themeData : new Theme(themeData);
  }

  /**
   * Applies this Theme to the game world.
   */
  async apply() {
    
    // Get our generated style block, if it already exists.
    const $head = $('head');
    let $style = $head.find(`style#${MODULE}`);
    // Generate a new style block to hold our styles if it doesn't already exist.
    if ($style.length <= 0) {
      $style = $(`<style id="${MODULE}"></style>`)
      $head.append($style);
    }

    // Construct basic style content from theme string properties, excluding "advanced".
    const styleData = Object.keys(this).filter(key => key !== 'advanced').map(themeKey => {
      let themeValue = this[themeKey];
      if (!themeValue || typeof themeValue !== 'string') return;
      const themeType = THEME_OPTIONS[themeKey]?.type;
      if (themeType === 'image') themeValue = `url("/${themeValue}")`
      const rule = `--pfu-${themeKey}: ${themeValue};`;
      return rule;
    }).filter(style => style).join('\n\t');

    // Generate style content from data.
    let styleContent = `:root {\n\t${styleData}\n}`;
    // Add advanced content.
    styleContent += `\n\n${this.advanced}`;

    $style.html(styleContent);
    
    // Add the ui accent to the left sidebar, if it doesn't already exist.
    $('#ui-left:not(:has(#ui-accent))').prepend('<div id="ui-accent"></div>');
  }

  /**
   * Downloads a json file of containing this theme's data.
   */
  exportToJson = function() {
    const data = JSON.stringify(foundry.utils.duplicate(this), null, 2);
    const filename = `${MODULE}-custom.json`;
    const blob = new Blob([data], {type: 'text/json'});

    // Create an element to trigger the download
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;

    // Dispatch a click event to the element
    a.dispatchEvent(new MouseEvent("click", {bubbles: true, cancelable: true, view: window}));
    setTimeout(() => window.URL.revokeObjectURL(a.href), 100);
  }

  /**
   * Opens a dialog that allows the user to import a Theme from an uploaded .json file.
   * 
   * @returns {Promise<Theme>} A promise that resolves to the imported Theme.
   */
  static async importFromJSONDialog() {
    return Dialog.wait({
      title: game.i18n.localize(`${MODULE}.dialog.importTheme.title`),
      content: await renderTemplate(TEMPLATES.IMPORT_THEME_DIALOG),
      buttons: {
        import: {
          icon: '<i class="fas fa-file-import"></i>',
          label: game.i18n.localize(`${MODULE}.dialog.importTheme.buttons.import.label`),
          callback: html => {
            const form = html.find("form")[0];
            if ( !form.data.files.length ) return ui.notifications.error(game.i18n.localize(`${MODULE}.error.noFileUploaded`));
            return readTextFromFile(form.data.files[0]).then(json => this.fromJSON(json));
          }
        },
        no: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize(`${MODULE}.dialog.importTheme.buttons.cancel.label`)
        }
      },
      default: "import"
    }, {
      width: 400
    });
  }

  /**
   * Generates a Theme from a passed in json string.
   * 
   * @param {string} json A json string containing the Theme data.
   * @returns {Theme} The generated Theme.
   */
  static async fromJSON(json) {
    const data = JSON.parse(json);
    return new Theme(data);
  }


  /* Controls - Default */
  'color-control-content' = '#ebf7afff';
  'color-control-border' = '#148782ff';
  'color-control-focus-content' = '#ffffffff';
  'color-control-inactive-content' = '#ebf7af80';
  'color-control-fill-1' = '#11292999';
  'color-control-fill-2' = '#49a49999';

  /* Controls - Highlight */
  'color-control-highlight-content' = '#047470ff';
  'color-control-highlight-border' = '#047470ff';
  'color-control-highlight-fill-1' = '#dcd374ff';
  'color-control-highlight-fill-2' = '#fff79aff';

  /* Controls - Active */
  'color-control-active-content' = '#fff79aff';
  'color-control-active-border' = '#fff79aff';
  'color-control-active-fill-1' = '#e28079cc';
  'color-control-active-fill-2' = '#f1a372cc';
  
  /* Apps - Default */
  'color-app-border' = '#148782ff';
  
  /* Apps - Header */
  'color-app-header-content' = '#ebf7afff';
  'color-app-header-focus-content' = '#ffffffff';
  'color-app-header-fill-1' = '#51c7ad4d';
  'color-app-header-fill-2' = '#044a2c4d';
  
  /* Apps - Body */
  'color-app-body-content' = '#ebf7afff';
  'color-app-body-focus-content' = '#ffffffff';
  'color-app-body-primary-fill-1' = '#11292980';
  'color-app-body-primary-fill-2' = '#49a49980';
  // TODO: When background-style is updated for theme.
  // 'color-app-scrollbar' = '#ebf7afff';
  // 'color-app-scrollbar-track' = '#00000080';
  // 'color-app-scrollbar-border' = '#00000000';
  'app-accent-image' = `/modules/${MODULE}/assets/images/logo.png`;
  'app-bg-image' = `/modules/${MODULE}/assets/images/pattern_hojita.png`;
  'ui-accent-image' = `/modules/${MODULE}/assets/images/logo.png`;
  
  /* Misc */
  'color-misc-shadow-primary' = '#77ebd7ff';
  'color-misc-shadow-highlight' = '#d8e08fff';
  'color-misc-border-highlight' = '#f78946cc';
  'color-misc-scrollbar' = '#5d142bff';
  'color-misc-scrollbar-track' = '#00000000';
  // TODO: This doesn't seem to do anything, but it's in the base foundry styles.
  // 'color-misc-scrollbar-border' = '#8d151bff';
  'advanced' = [
    ':root {',
    '  --pfu-ui-accent-width: 500px;',
    '  --pfu-ui-accent-height: 500px;',
    '  --pfu-ui-accent-position-top: -24px;',
    '  --pfu-ui-accent-position-left: 1px;',
    '  --pfu-ui-accent-clip-path: inset(0 370px 402px 0);',
    '  --pfu-border-radius-large: 20px;',
    '  --pfu-border-radius-medium: 10px;',
    '  --pfu-border-radius-small: 5px;',
    '  --pfu-border-width: 0.1em;',
    '}'
  ].join('\n');
}

export const THEME_OPTIONS = deepFreeze({
  /* Controls - Default */
  'color-control-content': {
    label: 'projectfu-theme.color-control-content.label',
    type: 'color'
  },
  'color-control-focus-content': {
    label: 'projectfu-theme.color-control-focus-content.label',
    type: 'color'
  },
  'color-control-inactive-content': {
    label: 'projectfu-theme.color-control-inactive-content.label',
    type: 'color'
  },
  'color-control-border': {
    label: 'projectfu-theme.color-control-border.label',
    type: 'color'
  },
  'color-control-fill-1': {
    label: 'projectfu-theme.color-control-fill-1.label',
    type: 'color'
  },
  'color-control-fill-2': {
    label: 'projectfu-theme.color-control-fill-2.label',
    type: 'color'
  },

  /* Controls - Highlight */
  'color-control-highlight-content': {
    label: 'projectfu-theme.color-control-highlight-content.label',
    type: 'color'
  },
  'color-control-highlight-border': {
    label: 'projectfu-theme.color-control-highlight-border.label',
    type: 'color'
  },
  'color-control-highlight-fill-1': {
    label: 'projectfu-theme.color-control-highlight-fill-1.label',
    type: 'color'
  },
  'color-control-highlight-fill-2': {
    label: 'projectfu-theme.color-control-highlight-fill-2.label',
    type: 'color'
  },

  /* Controls - Active */
  'color-control-active-content': {
    label: 'projectfu-theme.color-control-active-content.label',
    type: 'color'
  },
  'color-control-active-border': {
    label: 'projectfu-theme.color-control-active-border.label',
    type: 'color'
  },
  'color-control-active-fill-1': {
    label: 'projectfu-theme.color-control-active-fill-1.label',
    type: 'color'
  },
  'color-control-active-fill-2': {
    label: 'projectfu-theme.color-control-active-fill-2.label',
    type: 'color'
  },

  /* Apps - Default */
  'color-app-border': {
    label: 'projectfu-theme.color-app-border.label',
    type: 'color'
  },

  /* Apps - Header */
  'color-app-header-content': {
    label: 'projectfu-theme.color-app-header-content.label',
    type: 'color'
  },
  'color-app-header-focus-content': {
    label: 'projectfu-theme.color-app-header-focus-content.label',
    type: 'color'
  },
  'color-app-header-fill-1': {
    label: 'projectfu-theme.color-app-header-fill-1.label',
    type: 'color'
  },
  'color-app-header-fill-2': {
    label: 'projectfu-theme.color-app-header-fill-2.label',
    type: 'color'
  },

  /* Apps - Body */
  'color-app-body-content': {
    label: 'projectfu-theme.color-app-body-content.label',
    type: 'color'
  },
  'color-app-body-focus-content': {
    label: 'projectfu-theme.color-app-body-focus-content.label',
    type: 'color'
  },
  'color-app-body-primary-fill-1': {
    label: 'projectfu-theme.color-app-body-primary-fill-1.label',
    type: 'color'
  },
  'color-app-body-primary-fill-2': {
    label: 'projectfu-theme.color-app-body-primary-fill-2.label',
    type: 'color'
  },
  // TODO: When backgroundstyle is updated for theme.
  // 'color-app-scrollbar': {
  //   label: 'projectfu-theme.color-app-scrollbar.label',
  //   type: 'color'
  // },
  // 'color-app-scrollbar-track': {
  //   label: 'projectfu-theme.color-app-scrollbar-track.label',
  //   type: 'color'
  // },
  // 'color-app-scrollbar-border': {
  //   label: 'projectfu-theme.color-app-scrollbar-border.label',
  //   type: 'color'
  // },
  
  /* Misc */
  'color-misc-shadow-primary': {
    label: 'projectfu-theme.color-misc-shadow-primary.label',
    type: 'color'
  },
  'color-misc-shadow-highlight': {
    label: 'projectfu-theme.color-misc-shadow-highlight.label',
    type: 'color'
  },
  'color-misc-border-highlight': {
    label: 'projectfu-theme.color-misc-border-highlight.label',
    type: 'color'
  },
  'color-misc-scrollbar': {
    label: 'projectfu-theme.color-misc-scrollbar.label',
    type: 'color'
  },
  'color-misc-scrollbar-track': {
    label: 'projectfu-theme.color-misc-scrollbar-track.label',
    type: 'color'
  },
  // TODO: This doesn't seem to do anything, but it's in the base foundry styles.
  // 'color-misc-scrollbar-border': {
  //   label: 'projectfu-theme.color-misc-scrollbar-border.label',
  //   type: 'color'
  // },
  'ui-accent-image': {
    label: 'projectfu-theme.ui-accent-image.label',
    type: 'image'
  },
  'app-accent-image': {
    label: 'projectfu-theme.app-accent-image.label',
    type: 'image'
  },
  'app-bg-image': {
    label: 'projectfu-theme.app-bg-image.label',
    type: 'image'
  },
  'advanced': {
    label: 'projectfu-theme.advanced.label',
    hint: 'projectfu-theme.advanced.hint',
    type: 'multiline-text',
  },
    
});
  