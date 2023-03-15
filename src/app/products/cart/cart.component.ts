import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:any=[]
  grantTotal:number=0
  discount:number=0
  discountTotal:number=0
  checkoutMsg=""
  constructor(private cart:CartService,private router:Router){

  }

  ngOnInit(): void {
    this.cart.cartItemList.subscribe
    ((data:any)=>{
      this.cartItems = data
    })
    let total = this.cart.grantTotal()
    this.grantTotal =Number(total.toFixed(2))
    this.discountTotal=this.grantTotal

  }

  //removeItem(product)
  removeItem(product:any){
    this.cart.removeCartItem(product)
    let total = this.cart.grantTotal()
    this.grantTotal =Number(total.toFixed(2))
    this.discountTotal=this.grantTotal

  }

  //emptyCart
  emptyCart(){
    this.cart.removeCart()
  }

  //discount10percent()
  discount10percent(){
    this.discount=this.grantTotal*.1
    this.discountTotal -= this.discount
    this.discountTotal =Number(this.discountTotal.toFixed(2))

  }

   //discount20percent()
   discount20percent(){
    this.discount=this.grantTotal*.2
    this.discountTotal -= this.discount
    this.discountTotal =Number(this.discountTotal.toFixed(2))

  }

   //discount50percent()
   discount50percent(){
    this.discount=this.grantTotal*.5
    this.discountTotal -= this.discount
    this.discountTotal =Number(this.discountTotal.toFixed(2))
  }

  //checkout()
  checkout(){
    this.checkoutMsg="Order Placed Successfully... Thank you.."
    setTimeout(()=>{
      this.emptyCart()
      window.location.reload()
    },4000)

  }
}
