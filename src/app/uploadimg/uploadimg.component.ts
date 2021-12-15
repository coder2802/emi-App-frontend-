import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  filedata:any;
    /* File onchange event */
    fileEvent(e : any){
        this.filedata = e.target.files[0];
    }
   
  }



