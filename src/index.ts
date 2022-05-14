import 'reflect-metadata';
require('express-async-errors')

async function init(){
   require('dotenv').config();
   require('./bootstrap').init();
}

init();