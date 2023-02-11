import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any[]=[]
  total:number
  success:boolean=false
  successs:boolean=true
  successss:boolean=false
  constructor(private toster:ToastrService,private ser:CartService) { }

  ngOnInit(): void {
    this.getCartProducr()
  }
getCartProducr(){
  if("cart" in localStorage){
    this.cart=JSON.parse(localStorage.getItem("cart"))
}
this.getCartTotal()

}

  
minammount(index:number=1){
this.cart[index].quantity--
this.getCartTotal()
localStorage.setItem("cart",JSON.stringify(this.cart))
this.toster.show('done')
}
plusammount(index:number=0){
  this.cart[index].quantity++
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
this.toster.success('done')
}
ammount(){
  localStorage.setItem("cart",JSON.stringify(this.cart))

}
clearProduct(index:number){
  // splice  ديه مسؤله علي المسح
  this.cart.splice (index , 1)
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
  this.toster.success('done')
} 
clearProductAll(){
  this.cart= []
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cart))
  this.toster.success('done')
}
getCartTotal(){
this.total=0;
for(let x in this.cart){
  this.total +=this.cart[x].item.price * this.cart[x].quantity
}
}

addCart(){
  let products=this.cart.map(item=>{
    return{productId:item.item.id, quantity:item.quantity}
  })
  
  const model={
    userId:5,
    date:new Date(),
    products:products

  }
this.ser.getCartOrder(model).subscribe((send:any)=>{
  this.toster.success('done')
  this.success=true
  this.successs=false
this.successss=true
})
}

}
