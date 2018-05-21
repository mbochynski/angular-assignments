import {
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {

  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('heading: ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('heading: ', this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
