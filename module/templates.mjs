export function initializeTemplates() {
  return loadTemplates(Object.values(TEMPLATES));
}

export const TEMPLATES = Object.freeze({
  THEME_MENU: `modules/projectfu-theme/templates/theme-menu.hbs`,
  IMPORT_THEME_DIALOG: `modules/projectfu-theme/templates/import-theme-dialog.hbs`
});