

// ------------------ GLASSES VIDEO
$('.g-upload-btn').on('click', function (){
    $('#g-upload-input').click();
});

$('#g-upload-input').on('change', function(){

    //var file = $('input[type=file]')[0].files[0]
    var file = $('.g-upload-btn').get(0).files[0];

    console.log(file);
    var pos = file.name.lastIndexOf('.');
    var name = file.name.substr(0,pos);

    var form = $('form')[0]; // You need to use standard javascript object here
    var formData = new FormData(form);

    formData.append('Gvideo',  $('input[type=file]')[0].files[0], name);
    formData.append('Gvideo',  $('input[type=file]')[0].files[0], 'Gvideo.mp4');

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('Upload successful!\n');
      },
    });
});



// ------------------ LEFT VIDEO
$('.l-upload-btn').on('click', function (){
    $('#l-upload-input').click();
});

$('#l-upload-input').on('change', function(){

    var file = $('.l-upload-btn').get(0).files[0];

    var form = $('form')[0]; // You need to use standard javascript object here
    var formData = new FormData(form);
    formData.append('Lvideo',  file, 'Lvideo.mp4');

    $.ajax({
    url: '/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(data){
        console.log('Upload successful!\n');
        },
    });
});



// ------------------ RIGHT VIDEO
$('.r-upload-btn').on('click', function (){
    $('#r-upload-input').click();
});

$('#r-upload-input').on('change', function (){

    var file = $('.r-upload-btn').get(0).files[0];
    var form = $('form')[0]; // You need to use standard javascript object here
    var formData = new FormData(form);
    formData.append('Rvideo', file, 'Rvideo.mp4');

    $.ajax({
    url: '/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(data){
        console.log('Upload successful!\n');
        },
    });
});























// // ------------------ RIGHT VIDEO
// $('.r-upload-btn').on('click', function (){
//     $('#r-upload-input').click();
// });
//
// $('#r-upload-input').on('change', function (){
//
//     var file = $(this).get(0).files[0];
//
//     var formData = new FormData();
//     formData.append('Rvideo', file, 'Rvideo.mp4');
//
//     $.ajax({
//     url: '/upload',
//     type: 'POST',
//     data: formData,
//     processData: false,
//     contentType: false,
//     success: function(data){
//         console.log('Upload successful!\n');
//         },
//     });
// });
//
//
// // ------------------ LEFT VIDEO
// $('.l-upload-btn').on('click', function (){
//     $('#l-upload-input').click();
// });
//
// $('#l-upload-input').on('change', function(){
//
//     var file = $(this).get(0).files[0];
//
//     var formData = new FormData();
//     formData.append('Lvideo', file, 'Lvideo.mp4');
//
//     $.ajax({
//     url: '/upload',
//     type: 'POST',
//     data: formData,
//     processData: false,
//     contentType: false,
//     success: function(data){
//         console.log('Upload successful!\n');
//         },
//     });
// });
//
//
// // ------------------ GLASSES VIDEO
// $('.g-upload-btn').on('click', function (){
//     $('#g-upload-input').click();
// });
//
// $('#g-upload-input').on('change', function(){
//     var file = $(this).get(0).files[0];
//     console.log(file);
//     var pos = file.name.lastIndexOf('.');
//     var name = file.name.substr(0,pos);
//
//     // add the files to formData object for the data payload
//     var formData = new FormData();
//     formData.append('Gvideo', file, name);
//     formData.append('Gvideo', file,'Gvideo.mp4');
//
//     $.ajax({
//       url: '/upload',
//       type: 'POST',
//       data: formData,
//       processData: false,
//       contentType: false,
//       success: function(data){
//           console.log('Upload successful!\n');
//       },
//     });
//
//   // localStorage.setItem('current_video', name);
//   // console.log(localStorage.getItem('videoID'));
// });
