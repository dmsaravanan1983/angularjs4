import { Component } from '@angular/core';
@Component({
  //selector:'app-server',
  //selector:'[app-server]',
  selector:'.app-server',
//  template:'simply showing hte template inside the component dile',
  templateUrl:'./server.component.html',
//  styleUrls:['./server.component.css']
styles : [`
  h3{color:pink}`]
})
export class ServerComponent {
  newVal = "initial value !!!!!!!!!!!!";
  allowAction = false;
  constructor(){
    setTimeout(()=>{
      this.allowAction = true;
    },21000)
  }
  excute(){
    this.allowAction = true;
    this.newVal = "get this New value now";
  }

}
