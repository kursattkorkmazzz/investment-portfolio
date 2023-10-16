import { Component, ElementRef, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit  {

  private elementRef !: ElementRef;

  constructor( elementRef : ElementRef){
    this.elementRef = elementRef;
  }

  ngOnInit(){
    //this.elementRef.nativeElement.style.display = "none";
  }

  open(){
    this.elementRef.nativeElement.style.display = "block";
  }

  close(event : any){
    if(event.target.id == "root-modal")
      this.elementRef.nativeElement.style.display = "none";
  }
}
