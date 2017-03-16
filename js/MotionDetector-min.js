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
var MotionDetector=function(){function g(a){l=a;c.src=window.URL&&window.URL.createObjectURL(a)||a;c.play()}function m(a){console.error(a)}function n(){if(l){d.width=c.offsetWidth;d.height=c.offsetHeight;h.width=c.offsetWidth;h.height=c.offsetHeight;k.drawImage(c,0,0);f[e]=k.getImageData(0,0,d.width,d.height);e=0==e?1:0;a=k.getImageData(0,0,d.width,d.height);for(var g=a.data.length,b=0;b<g;)a.data[b]=.5*(255-a.data[b])+.5*f[e].data[b],a.data[b+1]=.5*(255-a.data[b+1])+.5*f[e].data[b+1],a.data[b+2]=
.5*(255-a.data[b+2])+.5*f[e].data[b+2],a.data[b+3]=255,b+=4;p.putImageData(a,0,0)}}var e=0,d=document.getElementById("canvas"),h=document.getElementById("canvasFinal"),c=document.getElementById("camStream"),k=d.getContext("2d"),p=h.getContext("2d"),l=null,a=null,f=[];return{init:function(){navigator.getUserMedia?navigator.getUserMedia({video:!0},g,m):console.error("Your browser does not support getUserMedia");window.setInterval(n,32)}}}();MotionDetector.init();
