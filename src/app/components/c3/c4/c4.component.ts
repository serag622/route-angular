import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c4',
  standalone: true,
  imports: [],
  templateUrl: './c4.component.html',
  styleUrl: './c4.component.scss',
  encapsulation : ViewEncapsulation.ShadowDom
})
export class C4Component {

  product : any

  constructor(private activeRoute : ActivatedRoute) {
     this.activeRoute.data.subscribe((res : any)=>{
      this.product = res.data
     })


    console.log(this.activeRoute.params)
    console.log('//////////////////////')
    this.activeRoute.queryParams.subscribe((res : any)=> {
      console.log(res)
    } )


    this.activeRoute.paramMap.subscribe((res)=>{
      console.log('sadsadsa' , res)
    })
  }
}
