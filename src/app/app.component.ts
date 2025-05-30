import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  serverElements: any= [{type: 'server', name: 'testServer1', content:'content of test'}];
  
  onServerAdded(serverData: {serverName: string, serverContenet: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContenet
    });
    console.log(this.serverElements);
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContenet: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContenet
    });
  }

  destroyComponent(){
    this.serverElements.splice(0, 1);
  }

  checkOnChanges(){
    this.serverElements[0].name = "testServer1_Changed!";
  }
}
