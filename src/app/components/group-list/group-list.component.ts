import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupListService } from '../../services/groupList/group-list.service';
import { MatTableDataSource } from '@angular/material/table';

export interface BusinessGroupList {
  businessGroupName: string;
  industryType: string;
  packageType: string;
  countLocations: number;
}

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})

export class GroupListComponent implements OnInit {
  dataSource: MatTableDataSource<BusinessGroupList>;
  displayedColumns: string[] = ['businessGroupName', 'industryType', 'packageTypeName', 'countLocations', 'Action'];

  constructor(private route: Router, private _getList: GroupListService) { }

  ngOnInit() {
    this._getList.GetBusinessGroups().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: error => {

      }
    })
  }

  Edit(element: any) {
    this.route.navigate(['home', { id: element.id, paymentInfoID: 0 }]);
  }

  exitPage() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['login']);
  }

  AddNewPage() {
    this.route.navigate(['home', { id: "New", paymentInfoID: 0 }]);
  }

  Cancel() {
    this.route.navigate(['group-list']);
  }
}
