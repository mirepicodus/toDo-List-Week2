  $(document).ready(function() {
    var now = new Date;
    var formDate = now.getMonth() +'/'+ now.getDate() +'/'+ now.getFullYear();
  $('h1').append(" "+ formDate);
  $('form#tasks').submit(function(event) {
    var taskList = {};
    taskList.description = $('input#task').val();
    $('input#task').val("");
    taskList.status = false;
    $('ul#incomplete').append("<li>" + taskList.description + "</li>");
    $('ul#incomplete li').click(function() {
      taskList.status = true;
      $(this).remove();
      $('ul#complete').append(this);

    });

    event.preventDefault();
  });
});
