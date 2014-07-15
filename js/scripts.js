  $(document).ready(function() {

  $('form#tasks').submit(function(event) {
    var taskList = {};
    taskList.description = $('input#task').val();
    $('input#task').val("");
    taskList.status = false;
    $('ul#incomplete').append("<li>" + taskList.description + "</li>");
    $('ul#incomplete li').last().click(function() {
      var now = new Date;
      var formDate = now.getMonth() +'/'+ now.getDate() +'/'+ now.getFullYear();
      $(this).remove();
      $('ul#complete').append(this);
      $('ul#complete').append("<li>" + formDate + "</li>");
    });

    event.preventDefault();
  });
});
