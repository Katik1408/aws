import {
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { BucketServiceService } from 'src/app/services/bucketservice/bucket-service.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { Listbucket, ObjectList } from 'src/app/models/s3bucket.model';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadobjectComponent } from '../uploadobject/uploadobject.component';
import { DataService } from '../../services/data/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-list-buckets',
  templateUrl: './list-buckets.component.html',
  styleUrls: ['./list-buckets.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListBucketsComponent implements OnInit {
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<ObjectList>>;

  public bucketListData: [{}];

  public expandedElement: any;
  public dataSource: any;
  displayedColumns: string[] = ['bucketName', 'created'];
  internalColumns: string[] = ['object', 'icon'];

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  constructor(
    private bucketService: BucketServiceService,
    private _snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAllBuckets();
  }

  openUploadDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(UploadobjectComponent, dialogConfig);
  }

  getAllBuckets() {
    this.bucketService.listAllBuckets().subscribe(
      (data: Listbucket) => {
        this.bucketListData = data.buckets;
        console.log(data);
      },
      (err) => {
        this._snackBar.open(err.statusText, '', {
          duration: 4000,
        });
        console.log(err.statusText);
      }
    );
  }

  getObjects(bucketName: string) {
    this.bucketService.getObjects(bucketName).subscribe(
      (data: ObjectList) => {
        this.dataSource = data.s3Objects;
        console.log(data);
        console.log('ExpandElement  ');
        console.log(this.expandedElement);
        this.dataService.sharedbucketName = this.expandedElement.bucketName;
        console.log(this.dataService.sharedbucketName);
      },

      (err) => {
        console.log('Error');
      }
    );
  }

  downloadObject(bucketName: string, keyName: string) {
    this.bucketService.downloadObject(bucketName, keyName).subscribe(
      (data) => {
        this._snackBar.open(
          'Download Success. Please check the file at Path C:\\AWS',
          '',
          {
            duration: 4000,
            panelClass: ['downloadSuccess'],
          }
        );
        console.log(data);
      },
      (err) => {
        this._snackBar.open(
          'Error while download. Please check your Object R/W Permissions',
          '',
          {
            duration: 4000,
          }
        );
        console.log(err);
      }
    );
  }
}
