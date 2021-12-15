import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuarantorService } from 'src/app/service/guarantor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guarantor',
  templateUrl: './guarantor.component.html',
  styleUrls: ['./guarantor.component.css']
})
export class GuarantorComponent implements OnInit {

  guarantor=
  {
    name:'',
    contact:0
  }

   //form validator
   guarantorForm:FormGroup

  constructor( private guarantorService:GuarantorService) { }

  ngOnInit(): void {

    this.guarantorForm=new FormGroup({
      'name': new FormControl('' , Validators.required),
      'contact': new FormControl(0 , Validators.required),
      
      

    })

  }


  //add guarantor
  addGuarantor()
  {
    this.guarantorService.addGuarantor(this.guarantor).subscribe(
      (data)=>
      {
        Swal.fire("Guarantor added Successfully" ,"Success" ,"success");
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }
}
