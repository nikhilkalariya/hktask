export class PostsDto {
    public userId:string;
    public id:number;
    public title:string;
    public body:string;
   
 
     constructor(userId:string,id:number,title:string,body:string ){
         this.userId = userId;
         this.id = id;
         this.title = title;
         this.body = body;        
     }
   }