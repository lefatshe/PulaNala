import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-tool-bar',
  templateUrl: './admin-tool-bar.component.html',
  styleUrls: ['./admin-tool-bar.component.css']
})
export class AdminToolBarComponent implements OnInit {
  @Input() sectionContentType: string

  @Input() canEdit: boolean
  @Input() canView: boolean
  @Input() canDelete: boolean
  @Input() canAdd: boolean

  @Input() canEditPage: string
  @Input() canViewPage: string
  @Input() canDeletePage: string
  @Input() canAddPage: string

  addPathUrl: string
  editPathUrl: string
  viewPathUrl: string
  deletePathUrl: string

  constructor(public user: UserService) { }

  ngOnInit(): void {
    switch (this.sectionContentType) {
      case 'app-carousel-cells': {
        this.addPathUrl = '/add-room'
        this.editPathUrl = '/add-room'
        this.viewPathUrl = '/view-room'
        this.deletePathUrl = '/add-room'
        break;
      }
      case 'app-welcome-story': {
        this.addPathUrl = ''
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }


}
