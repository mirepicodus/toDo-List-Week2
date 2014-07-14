$(document).ready(function() {
  $('form#tasks').submit(function(event) {
    var taskList = {};
    taskList.description = $('input#task').val();
    $('input#task').val("");
    taskList.status = false;
    $('ul#incomplete').append("<li>" + taskList.description + "</li>");
    $('ul#incomplete li').click(function() {
      $(this).remove();
      $('ul#complete').append(this);

    });

    event.preventDefault();
  });
});
