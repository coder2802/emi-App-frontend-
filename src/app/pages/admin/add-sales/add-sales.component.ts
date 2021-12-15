import { Component, OnInit } from '@angular/core';
import { DateDialogComponent } from 'src/app/components/date-dialog/date-dialog.component';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import { SalesService } from 'src/app/service/sales.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { GuarantorService } from 'src/app/service/guarantor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



class Product{
  id:number;
  name: string;
  hsn:number;
  mrp:number;
  qty:number;
  rate:number;
  purchaseprice:number;
  cgst:number;
  sgst:number;
  
 



  constructor()
  {
    this.id=0
    this.name=''
    this.hsn=0
    this.mrp=0
    this.qty=0
    this.rate=0
    this.cgst=0
    this.sgst=0
    this.purchaseprice=0.0
    
    

  }
}

class Customer
{
  id:number
  firstname:string
  addressLine1: string;
  addressLine2:string
  contact: number;
  email: string;
  accountno:number;
  card:number
  
  address:
  {
    city:'',
    addressLine1:'',
    addressLine2:''
  }
 

  constructor()
  {
    this.id=0
    this.firstname=''
    this.contact=0
    this.email=''
    this.accountno=0
    this.card=0
    
    this.address={
      city:'',
      addressLine1:'',
      addressLine2:''
    
    }
    }
  }

  class Guarantor
  {
    id:number;
    name:string;
    contact:number;

    constructor()
    {
      this.id=0
      this.name=''
      this.contact=0
    }
  }

class SalesItems
{
  id:number
  product: Product = new Product;
  qty:number
  amount:number
  downpayment:number
  due:number
  emicount:number
  emiamt:number
  interest:number
  interestamt:number
  firstemidate:Date
  lastemidate:Date
  processingamt:number


  constructor()
  {
    this.id=0
    this.qty=0
    this.amount=0.0
    this.downpayment=0.0
    this.due=0.0
    this.emiamt=0.0
    this.emicount=0
    this.interest=0.0
    this.interestamt=0.0
    this.firstemidate=new Date()
    this.lastemidate=new Date()
    this.processingamt=0.0

  }
}




class Sales{
  
  saveBill() {
   
  }
  id:number
  customer: Customer = new Customer;
  guarantor:Guarantor=new Guarantor;

  
  invoicedate:Date
  invoiceno:number
  amountTotal:number;
  downpaymentTotal:number;
  dueTotal:number;
  interestTotal:number
 
  items: SalesItems[] = [];
 


  constructor(){
    // Initially one empty product row we will show 
    this.id=0
    this.items.push(new SalesItems());
    this.invoicedate=new Date()
    this.invoiceno=0
    this.amountTotal=0.0
    this.downpaymentTotal=0.0
    this.dueTotal=0.0
    this.interestTotal=0.0
    
  }

}


class SalesData
{

  sales: Sales = new Sales;

  constructor()
  {
    this.sales.amountTotal=0.0
    this.sales.downpaymentTotal=0.0
    this.sales.dueTotal=0.0
    this.sales.interestTotal=0.0
    
  }
}





@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {

  products :any[]
  customer :any[]
  guarantor:any[]
  sales=new Sales()
 
  
  salesData=new SalesData()
  salesid:any
  salesForm:FormGroup
  custname:any
  guarantorname:any
  productname:[
    {
      name:''
    }
  ]
  totaldownpayment=0.0
  
  



  constructor(private productService:ProductService ,
              private customerService:CustomerService,
              private salesService:SalesService,
              public dialog: MatDialog,
              private route:ActivatedRoute,
              private guarantorService:GuarantorService,
              private router:Router
            ) 
              { }

  

  ngOnInit(): void {

    let count : number
    let i=1
    count=(this.route.snapshot.params.lastinvoiceno);
    count=Number.parseInt(count.toString()) + +Number.parseInt(i.toString())
  
    this.sales.invoiceno=count

   
   
   
    this.salesForm=new FormGroup({
      'invoiceno': new FormControl(null , [Validators.required]),
      'city': new FormControl(null , Validators.required),
      'contact': new FormControl(null , Validators.required),
      'firstname': new FormControl(null , Validators.required),
      'addressLine1': new FormControl(null ),
      'name': new FormControl(null , Validators.required),
      'card': new FormControl(null , Validators.required),
      

    })

  


  




    this.customerService.getCustomer().subscribe(
      (data:any)=>
      {

        this.customer=data
      },
      (error:any)=>
      {
        console.log(error)
      }
    )


    this.guarantorService.getAllGuarantor().subscribe(
      (data:any)=>
      {
        this.guarantor=data
        console.log(this.guarantor)
      },
      (error)=>
      {
        console.log(error)
      }
    )



    this.productService.getAllProducts().subscribe(
      (data:any)=>
      {

        this.products=data
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
      return this.salesForm.controls;
  }


  //guarantor change
  guarantorChange(index :any)
  {
    this.sales.guarantor=this.guarantor.find(element => element.id==index)
    console.log(this.sales.guarantor)
  }


  //add row
  addProduct(){
    
    
    this.sales.items.push(new SalesItems());

    

    
  }
  
  //delete row
  deleteRow(index: number) {
    this.sales.items.splice(index , 1);
  }

  productChanges()
  {
    alert("hh")
  }

  //add product to invoice
  productChange(proindex :any , itemindex :any):void{

    
    console.log(proindex , itemindex)
    this.sales.items[itemindex].product=this.products[proindex];
    this.sales.items[itemindex].downpayment=0.0
    this.sales.items[itemindex].emiamt=0.0;
    this.sales.items[itemindex].qty=0.0
    this.sales.items[itemindex].emicount=0.0;
    this.sales.items[itemindex].interest=0.0
    this.sales.items[itemindex].processingamt=0.0


  }


  //qty change 
  qtyChange(proindex : any , itemindex:any):void{
    if(proindex==0 || proindex==1)
    {
      this.sales.items[itemindex].amount=this.sales.items[itemindex].product.mrp
      
      if(proindex==0)
      this.sales.items[itemindex].downpayment=0
    }
    this.sales.items[itemindex].amount=proindex * this.sales.items[itemindex].product.mrp;
    this.sales.items[itemindex].due=this.sales.items[itemindex].amount-this.sales.items[itemindex].downpayment
    this.sales.items[itemindex].emiamt=(this.sales.items[itemindex].due + this.sales.items[itemindex].processingamt + (this.sales.items[itemindex].due * (this.sales.items[itemindex].interest/100) * this.sales.items[itemindex].emicount ))  / (this.sales.items[itemindex].emicount)

    this.sales.items[itemindex].interestamt=(this.sales.items[itemindex].due * (this.sales.items[itemindex].interest)/100) * this.sales.items[itemindex].emicount

  }


  
  
  //downpaymnt change due calculate
  downpaymentChange(proindex :any , itemindex :any):void
  {
    this.sales.items[itemindex].due=this.sales.items[itemindex].amount - proindex
    console.log(this.sales.items[itemindex].due)
  }


  //emi count change
  emicountChange(emicount : any , itemindex :any)
  {




    this.sales.items[itemindex].emiamt=(this.sales.items[itemindex].due + this.sales.items[itemindex].processingamt + (this.sales.items[itemindex].due * (this.sales.items[itemindex].interest/100) * this.sales.items[itemindex].emicount ))  / (this.sales.items[itemindex].emicount)

    this.sales.items[itemindex].interestamt=(this.sales.items[itemindex].due * (this.sales.items[itemindex].interest)/100) * this.sales.items[itemindex].emicount

    
  }


  //interest change
  interestChange(interest :any , itemindex :any)
  {
    this.sales.items[itemindex].emiamt=(this.sales.items[itemindex].due + this.sales.items[itemindex].processingamt + ((this.sales.items[itemindex].due * (interest)/100) * this.sales.items[itemindex].emicount ))  / (this.sales.items[itemindex].emicount)

    this.sales.items[itemindex].interestamt=(this.sales.items[itemindex].due * (interest)/100) * this.sales.items[itemindex].emicount

    
  }


   //processing amt change
   processingAmtChange(pamount :any , itemindex :any)
   {
     console.log(this.sales.items[itemindex].due , this.sales.items[itemindex].interest/100  , this.sales.items[itemindex].emicount )
    
      
     this.sales.items[itemindex].emiamt=
                          (this.sales.items[itemindex].due
                            + pamount
                             + 
                               (this.sales.items[itemindex].due
                                 * (this.sales.items[itemindex].interest/100)
                                 * this.sales.items[itemindex].emicount ))
                                   / (this.sales.items[itemindex].emicount)


        this.sales.items[itemindex].interestamt=(this.sales.items[itemindex].due * (this.sales.items[itemindex].interest/100)) * this.sales.items[itemindex].emicount

        
   }
 

  //on city change
  cityChange(city : any):void{

    
    this.customerService.getAllCityCustomer(city).subscribe(
      (data:any)=>
      {
        this.customer=data
      },
      (error:any)=>
      {
        console.log(error)
      }

    )


  }

  //customer change load customer details
  customerChange(index :any ){

    
    this.sales.customer=this.customer.find(element=> element.id== index)
    console.log(this.sales.customer)
    
  }

  
  

  //save 
  saveSales()
  {

    
    this.salesData.sales=this.sales

    this.salesService.saveSale(this.salesData).subscribe(
      (data:any)=>
      {
        Swal.fire("Sale added successfully" , "Success" , "success")
        this.router.navigate(['/admin/view-sales']);
      },
      (error:any)=>
      {
        console.log(error)
      }
    )
  }

 
  // amt total
  getAmtTotal()
  {
    
    return this.sales.amountTotal= this.sales.items.reduce((sum, p)=> sum + (p.amount), 0)
  }

  //downpayment toatal
  getDownpaymentTotal()
  {
    return this.sales.downpaymentTotal=this.sales.items.reduce((sum, p)=> sum + (p.downpayment), 0)
    
    

  
  }

  //due taotal
  getDueTotal()
  {
    return this.sales.dueTotal=this.sales.items.reduce((sum, p)=> sum + (p.due), 0)
  }

  //get Interest Total
  getInterestTotal()
  {
    return this.sales.interestTotal=this.sales.items.reduce((sum, p)=> sum + (p.interestamt), 0)
  }


  //date dialog 
  openDialog(index : number )
  {
     this.salesid=this.sales.items[index].id
  
     let dialogRef=  this.dialog.open(DateDialogComponent , {
      data: {
        id: this.salesid,
        
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      

      
      this.sales.items[index].firstemidate=result.data
     
   
   })

  

  }

  

}
