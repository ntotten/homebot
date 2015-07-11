import alexa from 'alexa-app';


var app = new alexa.app('homebot');
app.launch(function(req, res) {
    res.say('Hello World');
});


export default app;
