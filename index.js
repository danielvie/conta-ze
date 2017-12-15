var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// ROUTES
// ==============================================

// instance of router
var router = express.Router();

router.get("/", function(req,res) {
    res.send("entrei aqui, bem vindo! ");
})

// arquivos
router.get('/leonam', function (req, res) {
    res.sendFile(__dirname + "/docs/leonam.pdf");
})

app.use('/', router);

app.listen(port);