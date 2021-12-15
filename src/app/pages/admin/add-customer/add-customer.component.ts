import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

   
  customerNameCheck:any
  customerAlreadyExists:any
  customer:[]=[]
  allcustomerList= [{firstname:''}]

customerobject={

  customer:{
    firstname:'',
    lastname:'',
    email:'',
    contact:0,
    accountno:0,
    card:0,
    

  },
  
  address:{
    addressLine1:'',
    addressLine2:'',
    postalcode:'',
    city:'',
    state:''
  }

}




constructor( private customerService:CustomerService , private router:Router) { }

filedata:any;
    /* File onchange event */
    fileEvent(e : any){
        this.filedata = e.target.files[0];
    }
  



//form validator
customerForm:FormGroup

ngOnInit(): void {
  this.customerForm=new FormGroup({
    'firstname':new FormControl(null , 
                [Validators.required,
                 Validators.pattern('[a-zA-Z]*'),
                 
                 
                ]),
    'lastname':new FormControl(null , 
                [Validators.required,
                 Validators.pattern('[a-zA-Z]*')
                ]),
    'email':new FormControl(null , 
            [Validators.required,
             Validators.email
            ]),
    'accountno':new FormControl(null , [Validators.required , Validators.pattern('[0-9]*')]),
    'card':new FormControl(null , [Validators.required , Validators.pattern('[0-9]*')]),
    'contact':new FormControl(null , [Validators.required , Validators.pattern('[0-9]*')]),
    'addressLine1':new FormControl(null , Validators.required),
    'postalcode':new FormControl(null , Validators.required),
    'addressLine2':new FormControl(null ),
    'city':new FormControl(null , [Validators.required , Validators.pattern('[a-zA-Z]*')]),
    'state':new FormControl(null , [Validators.required ]),
  }
  
  )
  

  this.customerService.getCustomer().subscribe(
    (res : any)=>
    {
       console.log(res)
      this.allcustomerList=res
    },
    (error:any)=>
    {
      console.log(error)
    }
  )



}



//form control validators
//return form controls
get f()
{
    return this.customerForm.controls;
}


//
// checkFirstname(name : any)
// {
  
// //   const array1 = [{}];

//  //   array1.find(element => element.name == "mhi");
// //console.log(this.allcustomerList);
// if(this.allcustomerList.find(element => element.firstname == name)){
//    alert("name exit")
// }else{
//   alert("name does not exit")
// }
  
    
// }













//add customer data
addCustomer()
{

this.customerService.addCustomer(this.customerobject).subscribe(
  (data:any)=>
  {
    Swal.fire("customer Added Successfully" , "Success" ,"success")
    this.router.navigate(['/admin/view-customer']);
  },
  (error :any)=>
  {
    Swal.fire("Oops Something went wrong" ," Error" ,"error")
    console.log(error)
  }
)

}


}

