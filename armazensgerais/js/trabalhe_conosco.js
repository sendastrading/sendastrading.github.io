function fileTypeLimit(types) {
  types = types.split(' ');
  return function(fileInfo) {
    if (fileInfo.name === null) {
      return;
    }
    var extension = fileInfo.name.split('.').pop();
    if (types.indexOf(extension) == -1) {
      throw new Error("fileType");
    }
  };
}

(function(){
  $('[role=uploadcare-uploader][data-file-types]').each(function() {
    var input = $(this);
    var widget = uploadcare.Widget(input);
    widget.validators.push(fileTypeLimit(input.data('file-types')));
  });
}());
