var quote = require("./../controllers/quotes");
var path = require("path");


module.exports = function (app) {
    console.log('we are in routes');

    app.post('/logIn', function (req, res) {
        req.session.user = req.body.name;
        res.json(req.session.user);
    })

    app.post('/addquote', function (req, res) {
        console.log("we found the route");
        quote.addquote(req, res);
    })

    app.get('/allquotes', function (req, res) {
        quote.findall(req, res);
    })

    app.get('/logout', function (req, res) {
        req.session.destroy();
        res.redirect('/');
    })

    app.post('/like', function (req, res) {
        quote.like(req, res);
    })
    
    app.post('/delete', function (req, res) {
        quote.deleted(req, res);
    })

    app.all('*',(req,res,next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}