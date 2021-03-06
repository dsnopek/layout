/**
 * @file
 * This model corresponds to the instance of a block placed in a region of a
 * layout.
 */
(function ($, _, Backbone, Drupal, drupalSettings) {
  "use strict";

  Drupal.layout = Drupal.layout || {};

  Drupal.layout.BlockModel = Backbone.Model.extend({
    sync: function() { return false; },
    defaults: {
      // Unique id of the block instance.
      'id': null,
      'weight': null,
      'region': '',
      'config': {}
    }
  });

})(jQuery, _, Backbone, Drupal, drupalSettings);
