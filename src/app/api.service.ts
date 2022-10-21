import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  viewData=()=>{
    return this.http.get("http://localhost:8080/viewlibrary")
  }
  
    addData=(data:any)=>{
      return this.http.post("http://localhost:8080/addlibrary",data)
    }

    deletelibrary=(data:any)=>{
      return this.http.post("http://localhost:8080/deletelibrary",data)
    }

    searchlibrary=(data:any)=>{
      return this.http.post("http://localhost:8080/searchlibrary",data)
    }
    updatelibrary=(data:any)=>{
      return this.http.post("http://localhost:8080/editlibrary",data)
    }
}
