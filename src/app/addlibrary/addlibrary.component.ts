import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {

  constructor() { }




  bookcode=""
  bookname=""
 booktype=""
 authorname=""
issuedate=""
status:boolean=false



readValues=()=>{
  let data={
    "bookcode":this.bookcode,
     "bookname":this.bookname,
    "booktype":this.booktype,
    "authorname":this.authorname,
   "issuedate":this.issuedate
  }
  console.log(data)
}
  ngOnInit(): void {
  }

}

