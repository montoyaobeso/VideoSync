var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){

    // DELETE ALL PREVIOUS FILES
    var files = fs.readdirSync(path.join(__dirname, 'public/uploads/'));
    if (files.length > 0){
        for (var i = 0; i < files.length; i++) {
          var filePath = path.join(__dirname, 'public/uploads/') + files[i];
          fs.unlinkSync(filePath);
        }
    }
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/synchro', function(req, res){
    var files = fs.readdirSync(path.join(__dirname, 'public/uploads/'));
    for (var i=0;i<files.length;i++){
        var ext = path.extname(files[i])
        var patt = new RegExp("Gvideo");
        if( patt.test(files[i]) ){
            var Gvideo = files[i];
        }
        var patt = new RegExp("Rvideo");
        if( patt.test(files[i]) ){
            var Rvideo = files[i];
        }
        var patt = new RegExp("Lvideo");
        if( patt.test(files[i]) ){
            var Lvideo = files[i];
        }
        var ext = path.extname(files[i])
        if (ext != '.mp4'){
            var Name = files[i];
        }
    }

    var GvideoPath = path.join(__dirname, 'public/uploads/' + Gvideo)
    var LvideoPath = path.join(__dirname, 'public/uploads/' + Lvideo)
    var RvideoPath = path.join(__dirname, 'public/uploads/' + Rvideo)
    var NamevideoPath = path.join(__dirname, 'public/uploads/' + Name)

    const spawn = require('child_process').spawn;
    const shinfo = spawn('sh',['info.sh', RvideoPath, LvideoPath , GvideoPath, NamevideoPath]);

    var currentTime = new Date().getTime();
    while (currentTime + 200 >= new Date().getTime()) {
    }
    res.sendFile(path.join(__dirname, 'views/player.html'));
});


app.get('/preview', function(req, res){
  res.sendFile(path.join(__dirname, 'views/preview.html'));
});


app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/public/uploads');
  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
      fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });
  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });
  // parse the incoming request containing the form data
  form.parse(req);
  delete form;
});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
