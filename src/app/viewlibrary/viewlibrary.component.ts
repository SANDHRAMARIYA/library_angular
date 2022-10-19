import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlibrary',
  templateUrl: './viewlibrary.component.html',
  styleUrls: ['./viewlibrary.component.css']
})
export class ViewlibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { 
this.fetchData()
  }



  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.libraryData=data
      }
    )
  }
  
  libraryData:any=[]
  ngOnInit(): void {
  }

}
