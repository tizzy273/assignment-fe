let express = require('express')

let app = express();

app.use(express.static(__dirname + '/dist/source-code/browser'));


app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname + '/dist/source-code/browser/index.html')
});


app.listen(process.env.PORT);       