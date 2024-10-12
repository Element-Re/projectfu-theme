import { MODULE } from './settings.mjs';

export async function setTheme(theme) {
  const $head = $('head');
  let $style = $head.find(`style#${MODULE}`);
  if ($style.length <= 0) {
    $style = $(`<style id="${MODULE}"></style>`)
    $head.append($style);
  }

  const styleContent = Object.keys(theme.colors).map(colorKey => {
      const colorValue = theme.colors[colorKey];
      return `--color-${colorKey}: ${colorValue};`
  }).join('\n');

  $style.html(`:root {
    ${styleContent}
  }`);
}