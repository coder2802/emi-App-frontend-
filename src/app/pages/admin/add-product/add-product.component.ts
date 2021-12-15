import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product={
    name:'',
    hsn:0,
    mrp:0.0,
    rate:0.0,
    purchaseprice:0.0,
    cgst:0.0,
    sgst:0.0
  }


  constructor(private productService:ProductService,private router:Router) { }

  //form validator
  productForm:FormGroup

  ngOnInit(): void {


    this.productForm=new FormGroup({
      'name': new FormControl(null , Validators.required),
      'mrp': new FormControl(null , Validators.required),
      'purchaseprice': new FormControl(null , Validators.required),
      'rate': new FormControl(null , Validators.required),
      'cgst': new FormControl(null , Validators.required),
      'hsn': new FormControl(null , Validators.required),
      
      

    })

  }


  //form control validators
  //return form controls
  get f()
  {
      return this.productForm.controls;
  }


  //add product
  addProduct()
  {
    this.productService.addProduct(this.product).subscribe(
      (data:any)=>
      {
          Swal.fire("Product Added Succsessfully" ,"Success" ,"success")
          this.router.navigate(['/admin/view-product']);
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }
}
