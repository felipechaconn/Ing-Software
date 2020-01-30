$('#modalAddForm').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var modal = $(this);
    var dataString = 'id=' + recipient;

      $.ajax({
          type: "GET",
          url: "editdata.php",
          data: dataString,
          cache: false,
          success: function (data) {
              console.log(data);
              modal.find('.dash').html(data);
          },
          error: function(err) {
              console.log(err);
          }
      });  
})

$(document).ready(function() {
    $('#btnSubmit').click(function() {
      $('#deleteFrm').submit();
    });
  
  });