import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.scss'
})
export class C1Component {


  login(){
    localStorage.setItem('token' , 'token')
  }
}
