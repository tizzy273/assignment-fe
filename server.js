let express = require('express')

let app = express();

app.use(express.static(__dirname + '/dist/browser/assignment-fe'));


app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname + '/dist/browser/assignment-fe/index.html')
});


app.listen(process.env.PORT);       