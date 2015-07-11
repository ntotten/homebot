require('babel/register');
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import homebot from './lib/alexa';

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

app.express(homebot, '/echo/', false);

export default app;
