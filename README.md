# VANTA MODIFIER

## INTRODUCTION

This module provides animated backgrounds for your components.

Optionally you can set media queries.

## REQUIREMENTS
This module requires the following modules:
* [Modifiers](https://www.drupal.org/project/modifiers)
* [Paragraphs](https://www.drupal.org/project/paragraphs)

and [Vanta.js](https://github.com/tengbao/vanta) library.

## INSTALLATION
1. The module can be installed via the
   [standard Drupal installation process](http://drupal.org/node/1897420).
2. It will create a new Paragraph bundle.
3. Add this Paragraph bundle to a field_modifiers field on an entity (Block or
   Paragraph) or onto a field on a Look.
4. Install required library by one of these 2 options:

### A. Library installation (manual)
1. Download [Vanta](https://github.com/tengbao/vanta) library
   (version 0.5.21 is recommended).
2. Place unpacked library in your libraries folder.

### B. Library installation (composer)
1. Copy the following into your project's composer.json file.
```
"repositories": [
 {
  "type": "package",
  "package": {
   "name": "tengbao/vanta",
   "version": "0.5.21",
   "dist": {
    "type": "zip",
    "url": "https://github.com/tengbao/vanta/archive/9b62dcf55b58019b6662e8e9b83d8cec78f04a03.zip"
   },
   "require": {
    "composer/installers": "~1.0"
   },
   "type": "drupal-library"
  }
 }
]
```
2. Ensure you have following mapping inside your composer.json.
```
"extra": {
 "installer-paths": {
  "libraries/{$name}": ["type:drupal-library"]
 }
}
```
3. Run following command to download required libraries.
```
composer require tengbao/vanta
```

## CONFIGURATION
The module has no menu or modifiable settings. There is no configuration. When
enabled, the module will install a new paragraphs type which you need to reference from field_modifiers which can be created on the various entities (paragraphs, block, node). More information about the setup can be found [here](https://www.drupal.org/docs/8/modules/modifiers/quick-start).

## MAINTAINERS
This module is maintained by developers at Morpht. For more information on
the company and our offerings, see [morpht.com](https://morpht.com).
