import { JsonPipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ProducetService } from 'src/app/services/producet.service';
import { ToastrService } from 'ngx-toastr';
import { product } from '../interface/product-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Producets:product[]=[]
  Categorys:any[]=[]
  Producet:any[]=[]
  loading:boolean=false
  cart:any[]=[]
 
  constructor(private serv:ProducetService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducetS()
    this.getAllCategorys()

  }

  getAllProducetS(){
    this.loading=true
    this.serv.getAllProducts().subscribe((data:any)=>{
  this.Producets=data
  this.loading=false
    })
  }
  getAllCategorys(){
    this.loading=true
    this.serv.getAllCategorys().subscribe((data:any)=>{
      this.Categorys=data
      this.loading=false
    })
  }
  filter(event:any){
let value = event.target.value;

if(value == "All"){
  this.getAllProducetS()
}
else{
  this.getProductsByCategorys(value)

}
  }
  getProductsByCategorys(model:string){
    this.loading=true
    this.serv.getProductsByCategorys(model).subscribe((data:any)=>{
     this.Producets=data
     this.loading=false
    })
  }

  addToCart(event:any){
    // JSON.stringify()  ابعت الداتا
  //  JSON.parse() استقبل الداتا 
    if("cart" in localStorage){
      this.cart=JSON.parse(localStorage.getItem("cart"))
     
      // عاوزين نتأكد id ده موجود قبل كده ولا 
      let exit=this.cart.find(item => item.item.id == event.item.id)
      if(exit){
        this.toastr.warning('Product is alredy in cart',"", {
          disableTimeOut:false,
         titleClass:"toastr_title",
         messageClass:"toastr_message",
         timeOut:600,
         closeButton:true
    })
      }else{
         this.cart.push(event)
         localStorage.setItem("cart" ,JSON.stringify(this.cart))
         this.toastr.success("Moved to cart","", {
          disableTimeOut:false,
         titleClass:"toastr_title",
         messageClass:"toastr_message",
         timeOut:600,
         closeButton:true
    })
      }
  
    }else{
      this.cart.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }
  
  }
  

}




