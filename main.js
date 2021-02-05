const generateImage = require('./generate-image')
const express = require('express');


var app = express();
var port = 8081
var maxlength = 40

const args = process.argv.slice(2)
if (args[0]) {
    port = args[0]
}
if (args[1]) {
    maxlength = args[1]
}

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.post('/5k', function (req, res) {
    var upper = ""
    var lower = ""
    var offset = 200
    if (req.body["upper"]){
        upper = req.body["upper"]
    } else {
        res.status(400).end('内容为空！')
    }
    if (req.body["lower"]){
        lower = req.body["lower"]
    } else {
        res.status(400).end('内容为空！')
    }
    if (req.body["offset"]){
        offset = req.body["offset"]
    }
    if ((upper.length + lower.length) > maxlength) {
        res.status(400).end('太长了！')
    } else {
        const canvas = generateImage(upper, lower, offset)
        if (canvas) {
            canvas.toBuffer((err, buffer) => {
            try {
                if (err) throw err
                let content = buffer.toString('base64')
                res.end(content);
            } catch (err) {
                if (err) console.log(err)
            }
            })
            } else {
            console.log('arguments or options are incorrect.')
        }
    }
}).listen(port);

console.log('服务运行于 http://127.0.0.1:%s/', port)










