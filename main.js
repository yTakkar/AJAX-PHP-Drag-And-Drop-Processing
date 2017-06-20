$(function(){

  var text = $('.drop-text');

  $('#drop-area').on('dragenter', function(e){
    e.preventDefault();
    console.log('dragged enter');
    $(this).css('border-style', 'dashed');
  });

  $('#drop-area').on('dragover', function(e){
    e.preventDefault();
    console.log('dragged over');
    $(this).css('border-style', 'dashed');
  });

  $('#drop-area').on('dragleave', function(e){
    e.preventDefault();
    console.log('dragged leaved');
    $(this).css('border-style', 'solid');
  });

  $('#drop-area').on('drop', function(e){
    e.preventDefault();
    console.log('drop');
    var image = e.originalEvent.dataTransfer.files;
    var formImage = new FormData();
    formImage.append('userImage', image[0]);
    $.ajax({
      url: 'upload.php',
      type: "POST",
      data: formImage,
      contentType: false,
      processData: false,
      cache: false,
      success: function(data){
        $('#drop-area').html(data);
      }
    });
  });
});
