import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlist:any
  wishlistStatusMsg=''

  constructor(private api:ApiService,private cart:CartService){ }

  ngOnInit(): void {
    this.api.getwishlist()
    .subscribe((result:any)=>{
      this.wishlist =result.wishlist
      if(this.wishlist.length==0){ 
        this.wishlistStatusMsg = "Your Wishlist is empty"
      }
    },
    (result:any)=>{
      if(result.error.message){
        this.wishlistStatusMsg = "Your Wishlist is empty"
      }
      
    }
    )
  }
  removeItem(productId:any){
    this.api.removeItemFromWishlist(productId)
    .subscribe(
      //200
      (result:any)=>{
      this.wishlist = result.wishlist
      if(this.wishlist.length==0){ 
        this.wishlistStatusMsg = "Your Wishlist is empty"
      }

    },
    //400
    (result:any)=>{
      alert(result.error.message)
    }
    )
  }
    addToCart(product:any){
      this.cart.addToCart(product)
      this.removeItem(product.id)
    }
  
}
