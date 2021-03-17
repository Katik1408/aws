import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BucketServiceService } from 'src/app/services/bucketservice/bucket-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { S3Response } from 'src/app/models/s3bucket.model';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-create-bucket',
  templateUrl: './create-bucket.component.html',
  styleUrls: ['./create-bucket.component.scss'],
})
export class CreateBucketComponent {
  public bucketName: string;

  constructor(
    public dialogRef: MatDialogRef<CreateBucketComponent>,
    private createBucketService: BucketServiceService,
    private _snackBar: MatSnackBar
  ) {}

  createBucket() {
    this.createBucketService.createBucket(this.bucketName).subscribe(
      (data: S3Response) => {
        console.log(data);
        if (data.status === 500) {
          this.openErrorSnackBar();
        } else this.openSuccessSnackBar();
      },
      (err) => {
        this.openErrorSnackBar();
        console.log(err);
      }
    );
  }

  openErrorSnackBar() {
    this._snackBar.open('Bucket Name Already Exists!', '', {
      duration: 3000,
      panelClass: ['errorSnackBar'],
    });
  }
  openSuccessSnackBar() {
    this._snackBar.open('Successfully Created Bucket!', '', {
      duration: 3000,
      panelClass: ['successSnackBar'],
    });
  }

  close() {
    this.dialogRef.close('Thanks for using me!');
  }
}
