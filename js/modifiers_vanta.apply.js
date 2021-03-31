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

    toggleVanta(element, media, config);

    window.addEventListener('resize', function () {
      toggleVanta(element, media, config);
    });

    function toggleVanta(element, media, config) {

      // TODO: Color returns error.
      var vantaConfig = {};
      config.config.split(/\r?\n/).forEach(function (line) {
        var parts = line.match(/(\S+)\s*:\s*([^\s,]+)/);
        vantaConfig[parts[1]] = parts[2].valueOf();
      });
      vantaConfig.el = element;

      var effect = VANTA[config.effect](vantaConfig);

      // TODO: destroy() function is not working.
      if (!window.matchMedia(media).matches) {
        effect.destroy();
      }
    }

  };

})(window.VantaModifier = window.VantaModifier || {});
