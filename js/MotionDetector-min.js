/*********************************************************************
*  #### JS Motion Visualiser ####
*  Coded by Jason Mayes. www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it anywhere.
*  Thanks. :-)
*  Got feedback or questions, ask here:
*  Github: https://github.com/jasonmayes/JS-Motion-Detection/
*  Updates will be posted to this site.
*********************************************************************/
navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL;
var MotionDetector=function(){function f(a){h=a;c.src=window.URL&&window.URL.createObjectURL(a)||a;c.play()}function n(a){console.error(a)}function p(){if(h){d.width=c.offsetWidth;d.height=c.offsetHeight;k.width=c.offsetWidth;k.height=c.offsetHeight;l.drawImage(c,0,0);g[e]=l.getImageData(0,0,d.width,d.height);e=0==e?1:0;a=l.getImageData(0,0,d.width,d.height);for(var f=a.data.length,b=0;b<f;)a.data[b]=.5*(255-a.data[b])+.5*g[e].data[b],a.data[b+1]=.5*(255-a.data[b+1])+.5*g[e].data[b+1],a.data[b+2]=
.5*(255-a.data[b+2])+.5*g[e].data[b+2],a.data[b+3]=255,b+=4;q.putImageData(a,0,0)}}var e=0,d=document.getElementById("canvas"),k=document.getElementById("canvasFinal"),c=document.getElementById("camStream"),l=d.getContext("2d"),q=k.getContext("2d"),h=null,a=null,g=[],m=null;return{init:function(){navigator.getUserMedia?navigator.getUserMedia({video:!0},f,n):console.error("Your browser does not support getUserMedia");m=window.setInterval(p,32)},stop:function(){clearInterval(m);h.getTracks().forEach(function(a){a.stop()})}}}();
(function(){document.getElementById("btnStop").onclick=function(f){MotionDetector.stop()};document.getElementById("btnInit").onclick=function(f){MotionDetector.init()}})();
