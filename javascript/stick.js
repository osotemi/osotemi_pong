/*
 * Crea una instància de Stick.
 * Amb aquest objecte creem la barra que el jugador té que controlar per fer rebotar la bola al sobre i no perdre vides
 *
 * @constructor
 * @this {Stick}
 * @param {id_stick} ,side {left or right}
 *
 */
var withObserver = require('./utils/Observer.js');
var context = require('context');

function Stick(id_stick,side,context) {

  this.imgObj = document.getElementById(id_stick);
  this.side= side || "left" ; //right,left,
  this.gap=25;    //From this.position in pixels
  this.context = context;
  var self = this;

  withObserver.call(Stick.prototype);

  context.ball.AddObserver(this);

  window.addEventListener("mousemove",
    function(e){
      y= (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      self.locate(self.gap,y);
  },
    false);
	//Posicionem stick a les coordenades x,y
	this.locate = function(x,y){
  if (y>(this.context.vpHeight-this.imgObj.height)) y=this.context.vpHeight-this.imgObj.height;
		this.x=x;this.y=y;
		this.imgObj.style[this.side] = (Math.round(x))+ 'px';
		this.imgObj.style.top = (Math.round(y)) + 'px';
	};

  //Invocat cada vegada que la bola canvia de posici�
	this.Update = function(ball){ //ball is an Artifact Object
		var pos=ball.getPosition();
		var limit = this.gap;
		if (pos.x<=limit) {
			//alert("Posy bola->"+pos.x+"limit>"+limit);
			var distance=Math.abs((this.x+this.imgObj.height/2)-(pos.x+bola.imgObj.height/2));
			var minDist=(this.imgObj.height/2+bola.imgObj.height/2);
			if (distance<minDist) {
				//alert((minDist-distance));
				if ((minDist-distance)<23) bola.rebota("Stick","punta");
				else if ((minDist-distance)<23 && speed>5) bola.rebota("Stick","punteta");
				else bola.rebota("Stick","mig");
			}
		}
	}
}// End Stick class

module.exports = Stick;
