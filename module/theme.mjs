import { ruleMatcher } from './helpers.mjs';
import { MODULE, SETTINGS } from './settings.mjs';

export async function setTheme(theme) {
  const $head = $('head');
  let $style = $head.find(`style#${MODULE}`);
  if ($style.length <= 0) {
    $style = $(`<style id="${MODULE}"></style>`)
    $head.append($style);
  }

  const styleContent = Object.keys(theme).map(themeKey => {
    let themeValue = theme[themeKey];
    if (!themeValue) return;
    const themeType = SETTINGS[themeKey]?.type;
    if (themeType === 'image') themeValue = `url("${themeValue}")`
    const rule = `--pfu-${themeKey}: ${themeValue};`;
    if (!rule.match(ruleMatcher)) {
      console.error(`${MODULE} | Invalid rule: '${rule}'`);
      return;
    }
    return rule;
  }).filter(style => style).join('\n\t');

  $style.html(`:root {
    ${styleContent}
  }`);
  
  $('#ui-left:not(:has(#ui-accent))').prepend('<div id="ui-accent"></div>')
}