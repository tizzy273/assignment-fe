let express = require('express')

let app = express();

app.use(express.static(__dirname + '/dist'));


app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname + '/dist/index.html')
});


app.listen(process.env.PORT);       