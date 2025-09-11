# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Known Issues
- Some styles cannot be overridden without changes to the base system styles

## [3.0.3]
- Fix for illegible text styling in Combat HUD settings menu.

## [3.0.2]
- A comprehensive pass to catch various missing element styles.

## [3.0.1]
- Additional style tweaks

## [3.0.0]
- Foundry v13 Compatibility

## [2.0.0]
- New: Added the Theme Menu accessible through the game world settings which allows customizing various aspects of the theme, exporting and importing themes as well as selecting from one or more preset themes (only the default theme preset for now).
- Breaking Change: If you installed a pre-release version of `2.0.0`, the paths to your images might need to be changed. Make sure to remove any leading slashes: `\modules\...` should now be `modules\...` and so on.
- Re-added missing text-shadow styling on inline buttons (inline damage, etc.)
- Style buttons from the Inline Macro Execution module.
- Improved styling of fabula ultima damage type icons
- Style item images in chat message content (example: Infusions)

## [2.0.0]
- New: Added the Theme Menu accessible through the game world settings which allows customizing various aspects of the theme, exporting and importing themes as well as selecting from one or more preset themes (only the default theme preset for now).
- Breaking Change: If you installed a pre-release version of `2.0.0`, the paths to your images might need to be changed. Make sure to remove any leading slashes: `\modules\...` should now be `modules\...` and so on.
- Re-added missing text-shadow styling on inline buttons (inline damage, etc.)
- Style buttons from the Inline Macro Execution module.
- Improved styling of fabula ultima damage type icons
- Style item images in chat message content (example: Infusions)

## [1.0.10]
- Style Tweak: Added missing hover highlight color on non-macro buttons in the Hotbar UI (Lock Hotbar, Browse Macro Directory).

## [1.0.9]
- Fix for mouse over on links and buttons changing the text colors where it shouldn't, like in the content of window apps.

## [1.0.8]
- Resolved issue with hiding overflow content in window apps like Forien's Quest Log.
- Style Tweak: Fixed inconsistent rounded corners in window apps in the base Project FU Theme. Now all window apps should properly have rounded corners.

## [1.0.7]
- Resolved issue with popped out sidebar styling.

## [1.0.6]
- Resolved issue with minimized sheets not hiding accent decoration.
- Another major round of style tweaks.

## [1.0.5]
- Resolved issue with control styling in Foundry 11.

## [1.0.4]
- More style tweaks.
- Refreshed theme.css using css variables and more streamlined styles.

## [1.0.3]
- Fixes broken background image in chat box and Theater Inserts text box.
- Limited window header image to actor, item, and active effect sheets for the time being to resolve issue with the image exceeding the size of the window.
  - I'll happily take requests to include other specific sheets or windows.
- Various other minor style tweaks.

## [1.0.2]
- Resolved issue with token hud resource inputs.

## [1.0.1]
- Initial Release