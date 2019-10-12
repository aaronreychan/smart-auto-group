import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var $: any;
declare var require: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoBackground') videoplayer: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    this.videoplayer.nativeElement.play();
  }
}
