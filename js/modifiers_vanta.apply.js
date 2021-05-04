/**
 * @file
 * Initializes modification based on provided configuration.
 */

(function (VantaModifier) {

  'use strict';

  VantaModifier.apply = function (context, selector, media, config) {

    var element = context.querySelector(selector);
    if (!element) {
      return;
    }
    config.config.el = element;

    toggle(element, media, config);

    window.addEventListener('resize', function () {
      toggle(element, media, config);
    });

    function toggle(element, media, config) {

      var effects = element.querySelectorAll('.vanta-canvas');
      effects.forEach(e => e.remove());

      if (window.matchMedia(media).matches) {
        VANTA[config.type](config.config);
      }

    }

  };

})(window.VantaModifier = window.VantaModifier || {});
