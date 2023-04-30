(()=>{"use strict";function e(e,t){this.x=e,this.y=t,this.getX=function(){return this.x}.bind(this),this.getY=function(){return this.y}.bind(this)}function t(e,t,s,i,n){this.name=e,this.length=t,this.timesHit=s,this.status=i,this.coords=n,this.hit=function(){this.timesHit++,this.timesHit==this.length&&(this.status="sunk")}.bind(this),this.hasSunk=function(){return alert(`${e} has been sunk`)}.bind(this)}function s(t,s){this.size=t,this.callback=s,this.fleet=[],this.boardSpaces=[],this.placeShip=function(e){for(let t=0;t<e.coords.length;t++){let s=e.coords[t].getX(),i=e.coords[t].getY();this.boardSpaces.push({x:s,y:i,theShip:e})}this.fleet.push(e),this.callback(this)}.bind(this),this.recieveAttack=function(t,s){let i=new e(t,s);const n=i.getX(),a=i.getY();console.log("Check these coordinates",{x:n,y:a});const h=this.boardSpaces.filter((e=>e.x==n&&e.y==a));h.length>0?(h[0].theShip.hit(),this.boardSpaces.push({x:n,y:a,Status:"Hit"}),console.log(`${h[0].theShip.name} has been hit`)):(console.log("The attack missed"),this.boardSpaces.push({x:n,y:a,Status:"Missed"})),this.callback(this)}.bind(this),this.updateFleetStatus=function(){const e=this.fleet.find((e=>"sunk"==e.status)),t=this.fleet.indexOf(e);return t>-1&&this.fleet.splice(t,1),this.callback(this),void 0===e?"":e.hasSunk()}.bind(this),this.isGameOver=function(){if(0==this.fleet.length)return alert("The game is over")}.bind(this)}function i(e,t){var i;this.name=e,this.gameBoard=new s(10,(i=t,e=>{i.innerText="",console.log(e);for(let t of e.fleet)for(let s of t.coords){const t=document.createElement("div");t.setAttribute("class","ship-cell"),t.style.left=30*s.x+"px",t.style.top=30*s.y+"px",i.appendChild(t),e.boardSpaces.some((e=>e.x===s.x&&e.y===s.y&&"Hit"===e.Status))&&(t.style.backgroundColor="red")}})),this.getName=function(){return this.name}.bind(this)}new t("Carrier",5,0,"sailing",[new e(5,5),new e(4,5),new e(3,5),new e(2,5),new e(1,5)]),new t("Battleship",4,0,"sailing",[new e(2,4),new e(2,5),new e(2,6),new e(2,7)]),new t("Cruiser",3,0,"sailing"),new t("Submarine",3,0,"sailing"),new t("Destroyer",2,0,"sailing");let n=new i("Player",document.getElementsByClassName("player1-board")[0]);n.gameBoard.placeShip(new t("Battleship",4,0,"sailing",[new e(2,4),new e(2,5),new e(2,6),new e(2,7)])),n.gameBoard.recieveAttack(2,4);let a=new i("Computer",document.getElementsByClassName("player2-board")[0]);a.gameBoard.placeShip(new t("Carrier",5,0,"sailing",[new e(5,5),new e(4,5),new e(3,5),new e(2,5),new e(1,5)])),a.gameBoard.recieveAttack(5,5),console.log({user:n,AI:a})})();