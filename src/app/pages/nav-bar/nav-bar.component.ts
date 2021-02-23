import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateBucketComponent } from '../create-bucket/create-bucket.component';
import {  ProgressBarService} from "../../services/shared/progress-bar.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private matDialog: MatDialog,public progressBarService: ProgressBarService) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(CreateBucketComponent, dialogConfig);
  }
}