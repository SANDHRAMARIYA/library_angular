import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchlibrary',
  templateUrl: './searchlibrary.component.html',
  styleUrls: ['./searchlibrary.component.css']
})
export class SearchlibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  issuedate=""

  readValues=()=>{
    let data={
      "issuedate":this.issuedate
    }
    console.log(data)
    this.myapi.searchlibrary(data).subscribe(
      (response)=>{
this.data=response
      }
    )

  }
  data:any=[]
  


  ngOnInit(): void {
  }

}
