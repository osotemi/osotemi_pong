/**
 * Our app is a closure
 *
 *
 */
//(function () {
    var artifact = require('./artifact');
    var utils = require('./utils');
    var stick = require('./stick');
    var vpWidth=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var vpHeight=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


           window.onload=function(){
                var artifact_=new artifact("bola");
                var stick_=new stick("racket");

                artifact_.vpWidth=vpWidth;
                artifact_.vpHeight=vpHeight;
                artifact_.locate((vpWidth/2)-artifact_.imgObj.width,(vpHeight/2)-artifact_.imgObj.height);  //Posicionem pilota al mig

                stick_.vpWidth=vpWidth;
                stick_.vpHeight=vpHeight;
                stick_.locate(vpHeight/2);

                var controlFunction=function(event){
                    event.preventDefault();
                    utils.clearSelection();
                    if (artifact_.state.match("run")) {
                        artifact_.state="stop";
                        artifact_.stop();
                    }else{
                        switch (event.type){
                            case "dblclick":
                                if (artifact_.state !== "run"){
                                    artifact_.state="run";
                                    artifact_.setDirection("NORTH_WEST");
                                    //artifact_.dirX=-2;
                                    //artifact_.dirY=-2;
                                }
                                break;
                            case "click":
                                if (artifact_.state !== "runhorizontal"){
                                    artifact_.state="runhorizontal";
                                    artifact_.setDirection("WEST");
                                    //artifact_.dirX=-2;
                                    //artifact_.dirY=-0;
                                }
                                break;

                            default:
                                stick_.movement( event.keyCode );
                                break;
                                /*
                                if (artifact_.state !== "runvertical"){
                                    artifact_.state="runvertical";
                                    artifact_.setDirection("NORTH");
                                    //artifact_.dirX=0;
                                    //artifact_.dirY=-2;
                                }
                                break;
                                */
                        }
                        artifact_.start();
                    }
                };

                window.addEventListener("dblclick",controlFunction,false);
                window.addEventListener("click",controlFunction,false);
                window.addEventListener("keyup",controlFunction,false);

            };
//})();
