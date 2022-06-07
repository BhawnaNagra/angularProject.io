import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  setAlert= false;
  onserver= "server created"
  constructor(){
    setTimeout(()=>{
   this.setAlert= true
    }, 3000);
  }

  ngOnInit(): void {
    
    }
    onCreateServer(){
      this.onserver = "sever created"
  }

}
