"use strict";

// create
$('#create').click(function () {
  var paragraph = $('#paragraph');
  paragraph.append('text appended to the paragraph.');
  paragraph.prepend('text prepended the paragraph.');
  paragraph.after('<p>text after the paragraph.</p>');
  paragraph.before('<p>text before the paragraph.</p>');
}); // READ

$('#read').click(function () {
  var paragraph = $('#paragraph');
  console.log("text:", paragraph.text());
  console.log("html:", paragraph.html());
  console.log("val:", paragraph.val());
}); // UPDATE

$('#update').click(function () {
  var paragraph = $('#paragraph');
  paragraph.text('I set new text.');
  paragraph.html('<i> I italicized the text I set');
  paragraph.val('I set new text');
}); // delete

$('#delete').click(function () {
  var paragraph = $('p');
  paragraph.empty();
  paragraph.remove();
});