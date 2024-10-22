import { deepFreeze } from './helpers.mjs';
import { TEMPLATES } from './templates.mjs';
import { Theme, THEME_OPTIONS } from './theme.mjs';

export const MODULE = 'projectfu-theme';
/**
 * Register module settings with Foundry.
 */
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
      onChange: value => Theme.from(value).apply()
    });
    
}
const THEMES = deepFreeze({
  default: new Theme(),
})

/**
 * A form for viewing and updating theme settings.
 */
class ThemeMenu extends FormApplication {

  /**
   * @readonly
   * @static
   * @memberof ThemeMenu
   */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 600,
      classes: [],
      popOut: 'false',
      template: TEMPLATES.THEME_MENU,
      id: `${MODULE}-menu`,
      title: `${MODULE}.settings.themeMenu.name`
    })
  }

  /**
   * Get data to needed to render the form template.
   * 
   * @returns {object} The data to pass to the form template.
   * @memberof @ThemeForm
   */
  getData() { 
    return {
      current: game.settings.get(MODULE, 'theme'),
      settings: THEME_OPTIONS,
      themes: THEMES
    }
  }

  /**
   * Updates the theme upon form submission.
   * 
   * @param {Event} event The submit event that initiated the update.
   * @param {*} formData The data collected from the submitted form.
   */
  _updateObject(event, formData) { 
    const data = foundry.utils.expandObject(formData);
    game.settings.set(MODULE, 'theme', data);
  }

  /**
   * Overrides default onSubmit behavior.
   * 
   * @param {Event} event The submit event.
   * @param {object} [updateData] The submitted data.
   * @param {boolean} [preventClose] Whether or prevent the normal closure of the form.
   * @param {boolean} [preventRender] Whether or prevent the normal re-rendering of the form.
   */
  async _onSubmit(event, {updateData=null, preventClose=false, preventRender=false} = {}) {
    const customPreventClose = event.submitter.name === 'apply' ? true : Boolean(preventClose);
    return super._onSubmit(event, {updateData: updateData, preventClose: customPreventClose, preventRender: preventRender});
  }

  /**
   * Populates the form fields with the data for the theme.
   * 
   * @param {jQuery} form A jQuery object containing the form element.
   * @param {object} themeData The theme data. 
   */
  setThemeFields(form, themeData) {
    Object.keys(themeData).forEach(themeKey => {
      const themeEntry = themeData[themeKey];
      const input = form.find(`input[name="${themeKey}"]`);
      input.val(themeEntry).each((i, inputElement) => {
        // Update color picker for this input, if enabled.
        inputElement.jscolor?.processValueInput(themeEntry);
      })
    })
    const advancedTextArea = form.find('textarea[name="advanced"]');
    advancedTextArea.val(themeData.advanced);
  }

  /**
   * 
   * @param {jQuery} form A jQuery object containing the form element.
   */
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
          this.setThemeFields(form, theme);
        }
      }
    })
    // Unset the theme when any other field changes.
    form.find('.form-fields :input:not(select[name="theme"])').on('change', (event) => {
      const themeSelect = form.find('select[name="theme"]');
      themeSelect.val('');
    })
    form.find('button[name="export"]').on('click', (event) => {
      const data = foundry.utils.expandObject(new FormData(form[0]));
      new Theme(Object.fromEntries(data)).exportToJson();
    })
    form.find('button[name="import"]').on('click', async (event) => {
      const theme = await Theme.importFromJSONDialog();
      if (theme) {
        this.setThemeFields(form, theme);
        const themeSelect = form.find('select[name="theme"]');
        themeSelect.val('');
      }
      
    })

  }
}