import { MODULE, registerSettings } from './module/settings.mjs';
import { initializeTemplates } from './module/templates.mjs';
import { setTheme } from './module/theme.mjs';

Hooks.once('init', () => {
  initializeTemplates();
  registerSettings();
  setTheme(game.settings.get(MODULE, 'theme'));
});