import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedbucketName:string;
  sharedKeyName:string;
  
  // setBucketName(bucketName:string){
  //   this.sharedbucketName = bucketName;
  // }

}
