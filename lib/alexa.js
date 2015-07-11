import alexa from 'alexa-app';


var app = new alexa.app('homebot');
app.launch(function(request,response) {
	response.say("You launched the app!");
});
app.dictionary = {"names":["matt","joe","bob","bill","mary","jane","dawn"]};
app.intent("nameIntent",
	{
		"slots":{"NAME":"LITERAL"}
		,"utterances": [
			"my {name is|name's} {names|NAME}"
			,"set my name to {names|NAME}"
		]
	},
	function(request,response) {
		response.say("Success!");
	}
);

// Output the schema
console.log( "\n\nSCHEMA:\n\n"+app.schema()+"\n\n" );
// Output sample utterances
console.log( "\n\nUTTERANCES:\n\n"+app.utterances()+"\n\n" );


export default app;
