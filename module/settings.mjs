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
  'blue-techno': new Theme({
    "color-control-content": "#F7FEFFFF",
    "color-control-border": "#ADC9FF80",
    "color-control-focus-content": "#F7FEFFFF",
    "color-control-inactive-content": "#F7FEFF80",
    "color-control-fill-1": "#2D388599",
    "color-control-fill-2": "#4758D199",
    "color-control-highlight-content": "#3C4685FF",
    "color-control-highlight-border": "#6F83D1FF",
    "color-control-highlight-fill-1": "#D9ECFFFF",
    "color-control-highlight-fill-2": "#F7FEFFFF",
    "color-control-active-content": "#F7FEFFFF",
    "color-control-active-border": "#F7FEFFB3",
    "color-control-active-fill-1": "#7D7D7DCC",
    "color-control-active-fill-2": "#E3E3E3CC",
    "color-app-border": "#00000000",
    "color-app-header-content": "#F7FEFFFF",
    "color-app-header-focus-content": "#FFFFFFFF",
    "color-app-header-fill-1": "#2D38854D",
    "color-app-header-fill-2": "#5C6DD64D",
    "color-app-body-content": "#F7FEFFFF",
    "color-app-body-focus-content": "#FFFFFFFF",
    "color-app-body-primary-fill-1": "#101129FF",
    "color-app-body-primary-fill-2": "#28275CFF",
    "color-app-name-section-content": "#F7FEFFFF",
    "color-app-name-section-shadow": "#000000FF",
    "color-app-name-section-fill-1": "#532853FF",
    "color-app-name-section-fill-2": "#5328538C",
    "color-app-control-content": "#D6F9FFFF",
    "color-app-control-border": "#D6F9FF5C",
    "color-app-control-shadow": "#2D3885FF",
    "color-app-control-fill-1": "#2D3885FF",
    "color-app-control-fill-2": "#2D3885FF",
    "color-app-control-highlight-content": "#2D3885FF",
    "color-app-control-highlight-border": "#2D3885FF",
    "color-app-control-highlight-shadow": "#2D3885FF",
    "color-app-control-highlight-fill-1": "#D6F9FFFF",
    "color-app-control-highlight-fill-2": "#D6F9FFFF",
    "color-app-control-active-content": "#2D3885FF",
    "color-app-control-active-border": "#2D3885FF",
    "color-app-control-active-shadow": "#2D3885FF",
    "color-app-control-active-fill-1": "#D6F9FFFF",
    "color-app-control-active-fill-2": "#D6F9FFFF",
    "color-app-image-fill-1": "#303573FF",
    "color-app-image-fill-2": "#3A49A1FF",
    "color-app-item-header-content": "#F8F7FFFF",
    "color-app-item-header-fill-1": "#2D3885FF",
    "color-app-item-header-fill-2": "#A1DAFFFF",
    "color-app-item-header-shadow": "#2D3885FF",
    "color-app-item-highlight-border": "#2D3885FF",
    "color-app-item-highlight-fill-1": "#D6F9FFFF",
    "color-app-item-highlight-fill-2": "#D6F9FF00",
    "color-app-clock-border": "#1E2559FF",
    "color-app-clock-fill-1": "#2D3885E0",
    "color-app-clock-fill-2": "#2D3885E0",
    "color-app-clock-bg-1": "#FFFFFFFF",
    "color-app-clock-bg-2": "#FFFFFFFF",
    "color-app-detail-section-content-primary": "#272A2AFF",
    "color-app-detail-section-content-secondary": "#1E2559FF",
    "color-app-detail-section-content-tertiary": "#4B4A44FF",
    "color-app-detail-section-border": "#c9c7b8ff",
    "color-app-detail-section-shadow": "#2D3885FF",
    "color-app-detail-section-label": "#2b4a42ff",
    "color-app-detail-section-primary-fill-1": "#D6F9FFFF",
    "color-app-detail-section-primary-fill-2": "#D6F9FFA3",
    "color-app-section-content-primary": "#191813FF",
    "color-app-section-content-secondary": "#1E2559FF",
    "color-app-section-content-tertiary": "#4B4A44FF",
    "color-app-section-border": "#F8F7FFE0",
    "color-app-section-primary-fill-1": "#F8F7FFE0",
    "color-app-section-primary-fill-2": "#F5F5FFED",
    "color-app-scrollbar": "#F8F7FFE0",
    "color-app-scrollbar-track": "",
    "color-hud-background-fill-1": "#2D3885FF",
    "color-hud-background-fill-2": "#2D3885FF",
    "ui-accent-image": "modules/projectfu-theme/assets/images/simbol_deco.png",
    "app-accent-image": "",
    "app-bg-image": "modules/projectfu-theme/assets/images/Page_deco.png",
    "app-section-bg-image": "",
    "sidebar-bg-image": "modules/projectfu-theme/assets/images/Page_deco_half.png",
    "color-misc-shadow-primary": "#73BEFFFF",
    "color-misc-shadow-highlight": "#DEF9FFFF",
    "color-misc-border-highlight": "#F78946CC",
    "color-misc-scrollbar": "#5D142BFF",
    "color-misc-scrollbar-track": "#00000000",
    "advanced": ":root {\n  --pfu-ui-accent-width: 70px;\n  --pfu-ui-accent-height: auto;\n  --pfu-ui-accent-position-top: -111px;\n  --pfu-ui-accent-position-left: 72px;\n  --pfu-ui-accent-clip-path: unset;\n  --pfu-border-radius-large: 20px;\n  --pfu-border-radius-medium: 10px;\n  --pfu-border-radius-small: 5px;\n  --pfu-border-width: 0.1em;\n  --pfu-control-shadow: 0 0 10px var(--color-shadow-dark);\n}\n\n#ui-accent {\n  transform: rotate(90deg) scaleY(-1);\n}\n\n#chat-form #chat-message {\n  background: var(--pfu-color-app-section-primary-fill);\n}"
  })
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