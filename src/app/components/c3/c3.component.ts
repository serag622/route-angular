import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/service/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-c3',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.scss'
})
export class C3Component implements OnInit {

  Products : any[] = []

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts(){
    this.productService.getProducts().subscribe((data : any)=>{
      this.Products = data?.products
    })
  }

}
