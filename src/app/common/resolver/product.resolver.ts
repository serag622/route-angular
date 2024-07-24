import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../service/products.service';
import { catchError } from 'rxjs';

export const productResolver: ResolveFn<any> = (route, state) => {

  const productService = inject(ProductService)

  return  productService.getProductsById(route.paramMap.get('id')!)

};
