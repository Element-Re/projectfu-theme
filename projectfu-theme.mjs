import { MODULE, registerSettings } from './module/settings.mjs';
import { initializeTemplates } from './module/templates.mjs';
import { Theme } from './module/theme.mjs';

Hooks.once('init', () => {
  initializeTemplates();
  registerSettings();
  Theme.from(game.settings.get(MODULE, 'theme')).apply();
});