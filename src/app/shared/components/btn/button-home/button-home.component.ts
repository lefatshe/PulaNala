import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrls: ['./button-home.component.css']
})
export class ButtonHomeComponent implements OnInit {

  @Input() label: string

  constructor() { }

  ngOnInit(): void {
  }

}
