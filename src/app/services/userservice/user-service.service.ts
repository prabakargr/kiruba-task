import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL="http://localhost:4000/api"
  constructor(
    private http:HttpClient,
  ) { }

  createUser<Observable>(postData:any){
   return this.http.post(this.baseURL+'/user/signup',postData)
  }

  loginUser<Observable>(postData:any)
  {
    return this.http.post(this.baseURL+'/user/login',postData)
  }


}
