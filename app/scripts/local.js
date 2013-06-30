// Quick and dirty for now.
// We wanna get going!
(function($, Kagura, undefined) {
  console.log(Kagura);
  $(document).ready(function(e) {
    $.ajax({
      type : 'POST',
      dataType : 'json',
      url : Kagura.settings.serviceApplication,
      data : {
        foo : 'hello',
      },
      success : function(e) {
        // we like them quick and dirty!
        ul = '<ul>';
        $.each(e, function(i,v) {
          ul += '<li>' + v + '</li>';
        });
        ul += '</ul>';

        $('#hello').append(ul);
      },
      error : function(e) {
        alert('error');
      }
    });
  });

})(jQuery, Kagura);
