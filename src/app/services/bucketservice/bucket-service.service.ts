import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const CREATE_BUCKET = 'api/S3Bucket/CreateNewBucket';
const GET_ALL_BUCKETS = 'api/S3Bucket/GetAllBucketList';
const GET_OBJECTS = 'api/S3Bucket/GetAllObjects';
const DOWNLOAD_OBJECT = 'api/S3Bucket/DownloadObject';
const UPLOAD_OBJECT = 'api/S3Bucket/UploadObject';

@Injectable({
  providedIn: 'root'
})

export class BucketServiceService {

  constructor(private httpClient: HttpClient) { }

  public createBucket(bucketName:string){
    return this.httpClient.post(`${API_URL}${CREATE_BUCKET}/${bucketName}`,'');
  }

  public listAllBuckets(){
    return this.httpClient.get(`${API_URL}${GET_ALL_BUCKETS}`);
  }

  public getObjects(bucketName:string){
    return this.httpClient.get(`${API_URL}${GET_OBJECTS}/${bucketName}`);
  }
  public downloadObject(bucketName:string, keyName:string){
    return this.httpClient.get(`${API_URL}${DOWNLOAD_OBJECT}/${bucketName}/${keyName}`);
  }

  public uploadObject(bucketName:string,keyName:string,file:any) : Observable<Object>{
    const formData = new FormData();
    formData.append('file',file);
    return this.httpClient.post(`${API_URL}${UPLOAD_OBJECT}/${bucketName}/${keyName}`,formData);
  }


}
