import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharedbucketName: string;
  sharedKeyName: string;
  public errorMessageSource = new Subject();
  public currentErorr$ = this.errorMessageSource.asObservable();

  setError(error: string) {
    this.errorMessageSource.next(error);
  }
  // setBucketName(bucketName:string){
  //   this.sharedbucketName = bucketName;
  // }
}
