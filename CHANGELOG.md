# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Known Issues
- Some styles cannot be overridden without changes to the base system styles

## [3.1.9]
- Add missing theming to inline clock commands

## [3.1.8]
- Fixes theming for some selects on actor sheets that were missed after cutting down on overly broad selectors
- Improves usage of the Misc Shadow Highlight setting and sets new defaults for this setting in included theme presets that should hopefully aesthetically contrast with the elements they are used to highlight.
- Adds new setting App Item Header Content (Focus) for buttons in character sheet item list headers when hovered.
- Remove default inset box shadow for inputs in light mode in PFU-specific window apps.

## [3.1.7]
- Fix for unintentional select dropdown styling that made them illegible in dark mode
- Additional minor style tweaks

## [3.1.3]
- Another minor style pass:
  - Add missing style for tags in Item traits section. 
  - Resolves some unintentional crosstalk between style selectors for various buttons and controls

## [3.1.2]
- Minor style pass:
  - Fix for growth clocks appearing always filled
  - Simplify context menu styles to reduce wonky highlighting and border curves
  - Fix for blocky radio buttons
  - Add missing style for section labels in some unique dialogs
  - Add missing style for clock labels when output to chat

## [3.1.1]
- Additional style tweaks for FU Roll Enhancements theming.

## [3.1.0]
- Updates theming support for FU Roll Enhancements 2.1.0

## [3.0.9]
- Fixes an issue with an incorrect value in default configs causing themes to attempt to load an invalid UI accent image.
- Fixes an issue with window background blur in some window apps.

## [3.0.8]
- Fixes the fix that broke the thing that was being fixed

## [3.0.7] 
- Resolves a few missed style issues with light mode support.

## [3.0.6]
- Another comprehensive style pass with a focus on support for light mode.

## [3.0.5]
- Reverted styling of non-PFU window apps. While this looked great when it worked, there were many cases of modules with window apps using custom styling that made this look bad, or worse, illegible, and handling them one-by-one is not feasible. I'll continue to evaluate whether this might be possible in the future using an approach more supported by Foundry's native application styling.
- Adding additional missing element styles, including clocks and progress tracks on sheets and the combat tracker sidebar.

## [3.0.4]
- Removed UI Accent (image in the upper-left corner of the screen) from default themes due to changes in interface layout in v13. The option to set a UI Accent and the assets previously used for the default UI Accents have not been removed from the module. Your current theme, default or not, will not be changed until a default theme is specifically loaded.
- A few additional style tweaks.

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