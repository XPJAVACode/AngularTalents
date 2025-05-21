import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContenet: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContenet: string}>();
  
  @ViewChild('serverContentInput') newServerContent: ElementRef | undefined
  //{static:false}
  
  newServerName ="";
  //newServerContent = "";
  
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContenet: this.newServerContent?.nativeElement.value
    });
  }

  onAddBluePrint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContenet: this.newServerContent?.nativeElement.value
    });
  }
}
