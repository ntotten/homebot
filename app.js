import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import homebot from './lib/alexa';

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

homebot.express(app, '/echo/', false);

export default app;
