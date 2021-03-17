export interface Listbucket{
    buckets:[{
        creationDate:string,
        bucketName:string
    }]
}
export interface S3Response{
    status:number,
    message:string
}
export interface ObjectList{
    s3Objects:[{
        bucketName:string
        key:string,
        lastModifiedOn:string;
        owner:string;
        size:string;
        storageClass: {
            value:string;
        }
    }]

}