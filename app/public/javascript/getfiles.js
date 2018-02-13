
function get_videonames(){
    var fs = require('fs');
    var files = fs.readdirSync(path.join(__dirname, 'public/uploads/'));
	console.log(files);
}
