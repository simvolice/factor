/**
* Main.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


var moment = require('moment');

moment.locale('ru');

module.exports = {

  attributes: {

    documentname: {type: 'string'},


    date: {type: 'string', defaultsTo: function(){

      return moment().format('LLL');


    }}






  }
};

