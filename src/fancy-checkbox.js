(function() {

  // Initialize fancy checkboxes/radios everywhere
  function init() {
    var $inputs = $('input[type="checkbox"], input[type="radio"]').not('[data-fancy-disabled="true"]');
    $inputs.each(function() {
      var $input = $(this);
      if ($input.parents('[data-fancy-disabled="true"]').length === 0) {
        $input.iCheck({
          checkboxClass: 'checkbox-fancy',
          radioClass: 'radio-fancy'
        });

        // Manually trigger `change` event, since iCheck does not.
        $input.on("ifChanged", function(e, selector, data) {
          $input.trigger("change", e, selector, data);
        });
      }
    });
  }

  $(init);
})();
