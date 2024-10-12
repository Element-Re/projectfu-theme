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
const THEMES = Object.freeze({
  default: Object.freeze({
    colors: Object.freeze({
      /* Foundry Overrides */
      'shadow-primary': '#77ebd7ff',
      'shadow-highlight': '#d8e08fff',
      'border-highlight': '#f78946cc',

      /* Colors */
      'primary': '#ebf7afff',
      'primary-inactive': '#ebf7af80',
      'secondary': '#148782ff',
      'selected': '#ffffffff',
      'highlight-primary': '#047470ff',
      'highlight-secondary': '#047470ff',
      'active-primary': '#fff79aff',
      'active-secondary': '#fff79aff',
    })
  })
});

const SETTINGS = Object.freeze({
  // Base settings off what's in the default theme.
  // TODO: Is there a better way to do this?
  // This approach does at least make sure we don't repeat ourselves.
  colors: Object.freeze(Object.keys(THEMES.default.colors))
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
          Object.keys(theme.colors).forEach(colorKey => {
            const colorEntry = theme.colors[colorKey];
            const input = form.find(`input[name="colors.${colorKey}"]`);
            input.val(colorEntry).each((i, colorElement) => {
              // Update color picker for this input.
              colorElement.jscolor.processValueInput(colorEntry);
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