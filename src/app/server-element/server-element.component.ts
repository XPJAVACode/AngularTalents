import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

 @Input('serverElement') element: { type: string; name: string; content: string } | undefined;

  ngOnChanges(changes: SimpleChanges){
      console.log("on changes called");
      console.log(changes);
  }

  constructor(){
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("on init called");
  }

  ngDoCheck(): void {
   console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("After content init called");
  }

  ngAfterContentChecked(): void {
    console.log("After content checked called");
  }

  ngAfterViewInit(): void {
    console.log("After view init called");
  }
  ngAfterViewChecked(): void {
    console.log("After view checked called");
  }

  ngOnDestroy(): void {
    console.log("destroy called");
  }

}
