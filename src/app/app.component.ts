import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import * as dataJasonFile from 'src/assets/users.json';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data?:User[];
  usersArray?:User[];
  userSarch:string=""
  userNameActive?:string
  
  constructor(public http:HttpClient){
    this.http.get("assets/users.json").subscribe(data=>{
      
      this.data = data as User[]
       
      if(this.userSarch){
        this.usersArray = this.data.filter((user)=>{
          user.email.toLowerCase()==this.userSarch.toLowerCase()
        })
      }else{
        this.usersArray = data as User[]

      }
      
    })
    
    // this.data = Object.values(dataJasonFile)  as unknown as User[]
    
    // this.usersArray = this.data
   
  }
 
  filterUser():void{
    this.usersArray = this.data?.filter((user)=>{
     return user?.email?.toLowerCase().includes(this.userSarch.toLowerCase()) 
    })
    
  }
  reset(){
    this.usersArray = this.data
  }
  actevUserName(id:number){
    this.userNameActive= this.usersArray?.find((user)=>{
      return user.id == id
    })?.username
    this.usersArray = this.usersArray?.map((user)=>{
      if(user.id == id){
        user.active = true
      }else{
        user.active = false
      }
      return user
    })
  }


}
