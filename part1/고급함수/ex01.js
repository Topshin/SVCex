var answer_logger = function(fn(value)) {
  fn(value);
  return value;
}
$('#answer').html(value);
