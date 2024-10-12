import { deepFreeze } from './helpers.mjs';
import { TEMPLATES } from './templates.mjs';
import { setTheme } from './theme.mjs';

export const MODULE = 'projectfu-theme';

export function registerSettings() {
    game.settings.registerMenu(MODULE, 'themeMenu', {
      name: `${MODULE}.settings.themeMenu.name`,
      label: `${MODULE}.settings.themeMenu.label`,
      hint: `${MODULE}.settings.themeMenu.hint`,
      icon: 'fas fa-bars',
      type: ThemeMenu,
      restricted: true
    });

    game.settings.register(MODULE, 'theme', {
      scope: 'world',
      config: false,
      type: Object,
      default: THEMES.default,
      onChange: setTheme
    });
    
}
const THEMES = deepFreeze({
  default: {
    /* Controls - Default */
    'color-control-content': '#ebf7afff',
    'color-control-border': '#148782ff',
    'color-control-focus-content': '#ffffffff',
    'color-control-inactive-content': '#ebf7af80',
    'color-control-fill-1': '#11292999',
    'color-control-fill-2': '#49a49999',

    /* Controls - Highlight */
    'color-control-highlight-content': '#047470ff',
    'color-control-highlight-border': '#047470ff',
    'color-control-highlight-fill-1': '#dcd374ff',
    'color-control-highlight-fill-2': '#fff79aff',

    /* Controls - Active */
    'color-control-active-content': '#fff79aff',
    'color-control-active-border': '#fff79aff',
    'color-control-active-fill-1': '#e28079cc',
    'color-control-active-fill-2': '#f1a372cc',
    
    /* Apps - Default */
    'color-app-border': '#148782ff',
    
    /* Apps - Header */
    'color-app-header-content': '#ebf7afff',
    'color-app-header-focus-content': '#ffffffff',
    'color-app-header-fill-1': '#51c7ad4d',
    'color-app-header-fill-2': '#044a2c4d',
    
    /* Apps - Body */
    'color-app-body-content': '#ebf7afff',
    'color-app-body-focus-content': '#ffffffff',
    'color-app-body-primary-fill-1': '#11292980',
    'color-app-body-primary-fill-2': '#49a49980',
    'color-app-body-secondary-fill-1': '#044a2c4d',
    'color-app-body-secondary-fill-2': '#044a2c4d',
    // TODO: When background-style is updated for theme.
    // 'color-app-scrollbar': '#ebf7afff',
    // 'color-app-scrollbar-track': '#00000080',
    // 'color-app-scrollbar-border': '#00000000',
    'app-accent-image': `/modules/${MODULE}/assets/images/logo.png`,
	  'app-bg-image': `/modules/${MODULE}/assets/images/pattern_hojita.png`,
    
    /* Misc */
    'color-misc-shadow-primary': '#77ebd7ff',
    'color-misc-shadow-highlight': '#d8e08fff',
    'color-misc-border-highlight': '#f78946cc',
    'color-misc-scrollbar': '#5d142bff',
    'color-misc-scrollbar-track': '#00000000',
    // TODO: This doesn't seem to do anything, but it's in the base foundry styles.
    // 'color-misc-scrollbar-border': '#8d151bff',
    'border-radius-large': '20px',
    'border-radius-medium': '10px',
    'border-radius-small': '5px',
    'border-width': '0.1em',
    'ui-accent-image': `/modules/${MODULE}/assets/images/logo.png`,
    'ui-accent-width': '500px',
    'ui-accent-height': '500px',
    'ui-accent-position-top': '-24px',
    'ui-accent-position-left': '1px',
    'ui-accent-clip-path': 'inset(0 370px 402px 0)',
  }
});

export const SETTINGS = deepFreeze({
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
    'color-app-body-secondary-fill-1': {
      label: 'projectfu-theme.color-app-body-secondary-fill-1.label',
      type: 'color'
    },
    'color-app-body-secondary-fill-2': {
      label: 'projectfu-theme.color-app-body-secondary-fill-2.label',
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
    'app-accent-image': {
      label: 'projectfu-theme.app-accent-image.label',
      type: 'image'
    },
    'app-bg-image': {
      label: 'projectfu-theme.app-bg-image.label',
      type: 'image'
    },

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
    'border-radius-large': {
      label: 'projectfu-theme.border-radius-large.label',
      type: 'string'
    },
    'border-radius-medium': {
      label: 'projectfu-theme.border-radius-medium.label',
      type: 'string'
    },
    'border-radius-small': {
      label: 'projectfu-theme.border-radius-small.label',
      type: 'string'
    },
    'border-width': {
      label: 'projectfu-theme.border-width.label',
      type: 'string'
    },
    'ui-accent-image': {
      label: 'projectfu-theme.ui-accent-image.label',
      type: 'image'
    },
    'ui-accent-width': {
      label: 'projectfu-theme.ui-accent-width.label',
      type: 'string'
    },
    'ui-accent-height': {
      label: 'projectfu-theme.ui-accent-height.label',
      type: 'string'
    },
    'ui-accent-position-top': {
      label: 'projectfu-theme.ui-accent-position-top.label',
      type: 'string'
    },
    'ui-accent-position-left': {
      label: 'projectfu-theme.ui-accent-position-left.label',
      type: 'string'
    },
    'ui-accent-clip-path': {
      label: 'projectfu-theme.ui-accent-clip-path.label',
      type: 'string'
    },
});

class ThemeMenu extends FormApplication {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 600,
      classes: [],
      popOut: 'false',
      template: TEMPLATES.THEME_MENU,
      id: `${MODULE}-theme-menu`,
      title: `${MODULE}.settings.themeMenu.name`
    })
  }

  getData() { 
    return {
      current: game.settings.get(MODULE, 'theme'),
      settings: SETTINGS,
      themes: THEMES
    }
  }

  _updateObject(event, formData) { 
    const data = expandObject(formData);
    game.settings.set(MODULE, 'theme', data);
  }

  activateListeners(form) {
    super.activateListeners(form);
    // Enable color pickers.
    form.each((i, element) => ColorPicker.install(element));
    // Reset color pickers on form reset.
    form.on('reset', (event) => {
      // Defer execution until after the event has been fully resolved and fields have been reset.
      setTimeout(() => {
        form.find('.jscolor').each((i, colorElement) => {
          colorElement.jscolor.processValueInput(colorElement.value);
        })
      }, 0);
    })
    // Set color fields and their associated color pickers when a theme is selected.
    form.find('select[name="theme"]').on('change', (event) => {
      const value = $(event.target).val();
      if (value) {
        const theme = THEMES[value];
        if (theme) {
          console.log(theme);
          Object.keys(theme).forEach(themeKey => {
            const themeEntry = theme[themeKey];
            const input = form.find(`input[name="${themeKey}"]`);
            input.val(themeEntry).each((i, inputElement) => {
              // Update color picker for this input, if enabled.
              inputElement.jscolor?.processValueInput(themeEntry);
            })
          })
        }
      }
    })
    // Unset the theme when any other field changes.
    form.find('.form-fields :input:not(select[name="theme"])').on('change', (event) => {
      const themeSelect = form.find('select[name="theme"]');
      themeSelect.val('');
    })
  }
}