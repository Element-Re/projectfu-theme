export function initializeTemplates() {
  return loadTemplates(Object.values(TEMPLATES));
}

export const TEMPLATES = Object.freeze({
  THEME_MENU: `modules/projectfu-theme/templates/theme-menu.hbs`,
});