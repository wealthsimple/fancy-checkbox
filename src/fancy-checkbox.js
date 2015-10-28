(function() {

  // Initialize fancy checkboxes/radios everywhere
  function init() {
    var $inputs = $('input[type="checkbox"], input[type="radio"]').not('[data-fancy-disabled="true"]');
    $inputs.iCheck({
      checkboxClass: 'checkbox-fancy',
      radioClass: 'radio-fancy'
    });
  }

  $(init);
})();
