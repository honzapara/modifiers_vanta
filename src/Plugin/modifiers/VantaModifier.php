<?php

namespace Drupal\modifiers_vanta\Plugin\modifiers;

use Drupal\modifiers\Modification;
use Drupal\modifiers\ModifierPluginBase;

/**
 * Provides a Modifier to set the Vanta on an element.
 *
 * @Modifier(
 *   id = "vanta_modifier",
 *   label = @Translation("Vanta Modifier"),
 *   description = @Translation("Provides a Modifier to set the Vanta on an element"),
 * )
 */
class VantaModifier extends ModifierPluginBase {

  /**
   * {@inheritdoc}
   */
  public static function modification($selector, array $config) {

    if (!empty($config['vanta_type'])) {
      $media = parent::getMediaQuery($config);

      $libraries = [
        'modifiers_vanta/vanta',
        'modifiers_vanta/apply',
      ];
      $settings = [
        'namespace' => 'VantaModifier',
        'callback' => 'apply',
        'selector' => $selector,
        'media' => $media,
        'args' => [
          'vanta_type' => $config['vanta_type'],
        ],
      ];

      if (!empty($config['vanta_config'])) {
        $settings['args']['config'] = $config['vanta_config'];
      }

      $attributes[$media][$selector]['class'][] = 'modifiers-has-background';

      return new Modification([], $libraries, $settings, $attributes);
    }
    return NULL;
  }

}
