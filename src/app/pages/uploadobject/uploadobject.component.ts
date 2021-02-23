import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BucketServiceService } from 'src/app/services/bucketservice/bucket-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data/data.service';
@Component({
  selector: 'app-uploadobject',
  templateUrl: './uploadobject.component.html',
  styleUrls: ['./uploadobject.component.scss'],
})
export class UploadobjectComponent implements OnInit {
  file: File = null;
  keyName: string;

  bucketName: string;

  constructor(
    public dialogRef: MatDialogRef<UploadobjectComponent>,
    private bucketService: BucketServiceService,
    private _snackBar: MatSnackBar,
    private dataService: DataService
  ) {}

  ngOnInit() {}
  onChange(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
  }

  uploadObject() {
    this.bucketService
      .uploadObject(
        this.dataService.sharedbucketName,
        this.file.name,
        this.file
      )
      .subscribe(
        (data) => {
          console.log(data);
          this._snackBar.open('Upload Successful');
        },
        (err) => {
          this._snackBar.open('Error Occurred! Please check the Bucket Write Permission');
          console.log(err);
        }
      );
  }
}
