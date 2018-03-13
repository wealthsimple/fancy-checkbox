(function() {

  // Initialize fancy checkboxes/radios everywhere
  function init() {
    var $inputs = $('input[type="checkbox"], input[type="radio"]').not('[data-fancy-disabled="true"]');
    $inputs.each(function() {
      var $input = $(this);
      if ($input.parents('[data-fancy-disabled="true"]').length === 0) {
        radioClass = 'radio-fancy';
        if ($input.hasClass('pretty')) {
          radioClass += ' pretty';
        }
        $input.iCheck({
          checkboxClass: 'checkbox-fancy',
          radioClass: radioClass,
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
