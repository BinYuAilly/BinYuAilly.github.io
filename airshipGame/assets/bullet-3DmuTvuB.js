function o({canvas:h,image:s,width:i=20,height:t=20}){h.style.cssText=`
      background-color: none;
    `,this.ctx=h.getContext("2d"),this.width=i,this.height=t,this.CanvasWidth=h.width,this.CanvasHeight=h.height,this.speed=5,this.move=0,this.show=!0,this.image=s,this.x=0,this.y=0,this.stop=!1,this.points=null}o.prototype={draw(h){if(this.points=h,this.stop)return;let{ctx:s,width:i,height:t,image:e}=this;if(s.clearRect(h.x-this.width/2,h.y-this.height/2-this.move,i,t),!!this.show){if(h.y-16-this.move>-this.height)this.move+=this.speed,this.x=h.x-this.width/2,this.y=h.y-this.height/2-this.move;else{this.show=!1;return}s.drawImage(e,this.x,this.y,i,t),requestAnimationFrame(()=>{setTimeout(()=>{this.isHit(),this.draw(h)},10)})}},isHit(){if(this.show){if(!this.game||!this.game.airships){console.log(this);return}this.game.airships.forEach((h,s)=>{if(!h.show)return;let i=this.x-h.width-5,t=this.x+5;h.x<=t&&h.x>=i&&h.y>=this.y-h.height/2&&(this.game.airships[s].show=!1,this.show=!1,this.game.airships.splice[1],this.game.score+=h.scoreValue)})}},destroy(){this.show=!1},getScore(){return this.game.score}};export{o as default};
