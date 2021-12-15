import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  products:any[]=[]
  page : number=1

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      (data:any)=>
      {
        this.products=data
      },
      (error)=>
      {
        console.log(error)
      }
    )


  }


  //update status of product
  statusChange(active : string , id:any):void{
   
    


    this.productService.changeStatus(id , active).subscribe(
      (data:any)=>
      {
          console.log("Status changed")
      },
      (error:any)=>
      {
        console.log(error)
      }
    )

  }
  
}
