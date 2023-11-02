import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-button',
  templateUrl: './manage-button.component.html',
  styleUrls: ['./manage-button.component.css']
})
export class ManageButtonComponent implements OnInit {
  @Input() id: string

  constructor() { }

  ngOnInit(): void {
  }

}
