var fs = require('fs');
fs.unlink('input2',function (err) {
    if(err){
        return console.error(err);
    }
    console.log('ok');
})