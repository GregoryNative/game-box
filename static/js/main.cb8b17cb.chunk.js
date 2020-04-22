(this.webpackJsonpgamebox=this.webpackJsonpgamebox||[]).push([[0],{10:function(t,e,s){},21:function(t,e,s){t.exports=s(32)},26:function(t,e,s){},32:function(t,e,s){"use strict";s.r(e);var i=s(0),a=s.n(i),n=s(17),o=s.n(n),h=(s(26),s(5)),r=s(6);s(10);var c=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("ul",null,a.a.createElement("li",{className:"li-header"},"Games"),a.a.createElement("li",null,a.a.createElement(h.b,{to:"/snake"},"Snake")))))},l=s(20),p=s.n(l),u=s(13),d={WINDOW_SIZE:600,GRID_SIZE:25,FRAME_RATE:15,KEYCODE_SPACE:32};function m(t,e){this.p=t,this.options=e}m.prototype.draw=function(){this.p.background(255);for(var t=0;t<this.options.WINDOW_SIZE;t+=this.options.GRID_SIZE)this.p.line(0,t,this.options.WINDOW_SIZE,t),this.p.line(t,0,t,this.options.WINDOW_SIZE)};var E=m;var f=function(t,e){var s=e.size,i=e.position;this.p=t,this.size=s,this.x=i.x,this.y=i.y};function I(t,e){f.call(this,t,e)}I.prototype.draw=function(){this.p.fill("red"),this.p.rect(this.x,this.y,this.size,this.size)};var y=I;function w(t,e){f.call(this,t,e),this.window=e.window,this.xspeed=1,this.yspeed=0,this.length=0,this.tail=[]}w.prototype.direction=function(t,e){this.canChangeDirection(t,e)&&(this.xspeed=t,this.yspeed=e)},w.prototype.canEat=function(t){return this.p.dist(this.x,this.y,t.x,t.y)<1},w.prototype.isNotAlive=function(){var t=this;return this.tail.some((function(e){return t.p.dist(t.x,t.y,e.x,e.y)<1}))},w.prototype.canChangeDirection=function(t,e){return!(this.tail.length>0)||(t+this.xspeed!==0||e+this.yspeed!==0)},w.prototype.getScore=function(){return this.length},w.prototype.eat=function(){this.length++},w.prototype.death=function(){this.length=0,this.tail=[]},w.prototype.update=function(){if(this.length===this.tail.length)for(var t=0;t<this.tail.length-1;t++)this.tail[t]=this.tail[t+1];this.tail[this.length-1]=this.p.createVector(this.x,this.y);var e=this.x+this.xspeed*this.size;1===this.xspeed?this.x=e%this.window:-1===this.xspeed&&(this.x=e<0?this.window-this.size:e);var s=this.y+this.yspeed*this.size;1===this.yspeed?this.y=s%this.window:-1===this.yspeed&&(this.y=s<0?this.window-this.size:s)},w.prototype.draw=function(){this.p.fill("rgb(0,255,0)");for(var t=0;t<this.tail.length;t++)this.p.rect(this.tail[t].x,this.tail[t].y,this.size,this.size);this.p.rect(this.x,this.y,this.size,this.size)};var k=w;function g(t){return{x:W(t),y:W(t)}}function W(t){return e=0,s=t.WINDOW_SIZE/t.GRID_SIZE,e=Math.ceil(e),s=Math.floor(s),(Math.floor(Math.random()*(s-e))+e)*t.GRID_SIZE;var e,s}var v=function(t,e,s){var i={size:s.GRID_SIZE,window:s.WINDOW_SIZE,position:g(s)};return"food"===t?new y(e,i):"snake"===t?new k(e,i):{}};function S(t,e){this.p=t,this.options=e,this.grid=new E(t,this.options),this.snake=v("snake",this.p,this.options),this.food=v("food",this.p,this.options),this.gameIsPaused=!0,this.score=0}S.prototype.init=function(){var t=this;this.p.setup=this.setup.bind(this),this.p.draw=function(){},this.p.keyPressed=function(){t.p.keyCode===d.KEYCODE_SPACE&&t.start()}},S.prototype.start=function(){this.gameIsPaused=!1,this.p.draw=this.draw.bind(this),this.p.keyPressed=this.keyPressed.bind(this)},S.prototype.resume=function(){this.gameIsPaused=!1},S.prototype.stop=function(){this.gameIsPaused=!0},S.prototype.setup=function(){this.p.frameRate(this.options.FRAME_RATE),this.p.createCanvas(this.options.WINDOW_SIZE,this.options.WINDOW_SIZE),this.grid.draw(),this.food.draw(),this.snake.draw(),this.pausedGameDraw()},S.prototype.draw=function(){this.grid.draw(),this.snake.canEat(this.food)&&(this.snake.eat(),this.food=v("food",this.p,this.options)),this.food.draw(),this.snake.isNotAlive()&&(this.score=this.snake.getScore(),this.snake.death(),this.gameIsPaused=!0),!this.gameIsPaused&&this.snake.update(),this.snake.draw(),this.pausedGameDraw()},S.prototype.pausedGameDraw=function(){this.gameIsPaused&&(this.p.fill("rgba(0,0,0, 0.7)"),this.p.rect(0,0,this.options.WINDOW_SIZE,this.options.WINDOW_SIZE),this.p.textSize(22),this.p.textAlign(this.p.CENTER),this.p.fill("white"),this.p.text("Press <SPACE> to start or pause",0,this.options.WINDOW_SIZE/2-50,this.options.WINDOW_SIZE),this.score>0&&(this.p.textSize(25),this.p.fill("yellow"),this.p.text("Congratulation: Your score is ".concat(this.score),0,this.options.WINDOW_SIZE/2,this.options.WINDOW_SIZE)))},S.prototype.keyPressed=function(){if(this.p.keyCode===d.KEYCODE_SPACE&&(this.gameIsPaused?this.resume():this.stop()),!this.gameIsPaused)switch(this.p.keyCode){case this.p.UP_ARROW:this.snake.direction(0,-1);break;case this.p.DOWN_ARROW:this.snake.direction(0,1);break;case this.p.RIGHT_ARROW:this.snake.direction(1,0);break;case this.p.LEFT_ARROW:this.snake.direction(-1,0)}};var _=S;var D=function(t,e){var s=d;return"classic"===t?new _(e,s):"fast"===t?new _(e,Object(u.a)({},s,{FRAME_RATE:45})):"small"===t?new _(e,Object(u.a)({},s,{WINDOW_SIZE:300})):{}};function x(t){return function(e){D(t,e).init()}}function N(t){var e=t.name;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{style:{color:"white"}},"Snake"),a.a.createElement(p.a,{sketch:x(e)}))}function O(){return a.a.createElement("header",{className:"App-header"},a.a.createElement("ul",null,a.a.createElement("li",{className:"li-header"},"Snake"),a.a.createElement("li",null,a.a.createElement(h.b,{to:"/snake/classic"},"Classic")),a.a.createElement("li",null,a.a.createElement(h.b,{to:"/snake/fast"},"Fast")),a.a.createElement("li",null,a.a.createElement(h.b,{to:"/snake/small"},"Small"))))}var A=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(r.c,null,a.a.createElement(r.a,{path:"/snake/classic"},a.a.createElement(N,{name:"classic"})),a.a.createElement(r.a,{path:"/snake/fast"},a.a.createElement(N,{name:"fast"})),a.a.createElement(r.a,{path:"/snake/small"},a.a.createElement(N,{name:"small"})),a.a.createElement(r.a,{path:"/snake/"},a.a.createElement(O,null))))};var R=function(){return a.a.createElement(h.a,null,a.a.createElement(r.c,null,a.a.createElement(r.a,{path:"/snake"},a.a.createElement(A,null)),a.a.createElement(r.a,{path:"/"},a.a.createElement(c,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cb8b17cb.chunk.js.map