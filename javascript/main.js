/**
 * Our app is a closure
 *
 *
 */

var utils = require('./utils/utils');
var context = require('./context');
var Observer = require("./utils/Observer.js");

//Once page has been completely loaded. Including images. We start the game
window.onload=function(){

    var context_ = new context();

    var startGame=function(event){
        event.preventDefault();
        utils.clearSelection();
        if (context_.state.match("run")){
          context_.stop();
        }else{
          context_.start();
        }
    };

    window.addEventListener("keypress",startGame,false);
};
