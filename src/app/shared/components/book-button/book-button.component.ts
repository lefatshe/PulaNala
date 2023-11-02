import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-button',
  templateUrl: './book-button.component.html',
  styleUrls: ['./book-button.component.css']
})
export class BookButtonComponent implements OnInit {
  @Input() label: string
  @Input() mailer: string
  // @Input() label: string

  constructor() { }

  ngOnInit(): void {
  }

}
