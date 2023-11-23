import {Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector:'[appCustomerDetial]'
})
export class customerDetialDirective{

    
  constructor(private elementRef :ElementRef){

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.background = "blue";
  }

}