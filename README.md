# Vanta Modifier

## INTRODUCTION

This module provides animated backgrounds for your components.

Optionally you can set media queries.

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
    "url": "https://github.com/tengbao/vanta/archive/refs/heads/master.zip"
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

### Optional steps for better user experience
1. Use a paragraph Preview view mode on Form display.
2. Use Media Library module for easier creation and selection of media assets.

## MAINTAINERS
This module is maintained by developers at Morpht. For more information on
the company and our offerings, see [morpht.com](https://morpht.com).
