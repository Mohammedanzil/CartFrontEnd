import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:any=[]
  searchItem:string=''

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.api.getAllProducts()
    .subscribe((result:any)=>{
      this.products = result.products
      console.log(result.products);
      
    })

   this.api.searchKey
    .subscribe((result:any)=>{
      this.searchItem = result
    })
    
  }  
}
