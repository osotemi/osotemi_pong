/**
 prototype we move up-down an image on screen
* @author osotemi
*
* @constructor
* @this {Stick}
*
*/
var Stick = function(id_racket){
  this.img_element = document.getElementById(id_racket);
  this.mobility = 40;
}

//Meneja la raqueta
Stick.prototype.movement= function( keycode ){
  if( keycode == 38 ){ this.locate(parseInt(this.img_element.style.top) + this.mobility); }
  else if (keycode == 40){ this.locate(parseInt(this.img_element.style.top) - this.mobility); };

}; //End move method

//Posicionem Raqueta de manera absoluta en Y i comprovem llímits
Stick.prototype.locate = function(y){
  //No ens eixim per dalt o per baix
  if (y>=0 || y<=this.vpHeight+this.img_element.height) {
      this.img_element.style.top = (Math.round(y)) + 'px';
  }
}; //End locate method

module.exports = Stick;
