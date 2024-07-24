import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedService } from './common/service/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-router';

  constructor(private sharedService: SharedService , private router : Router) {}

  @HostListener('window.onbeforeunload', [])
  public onBeforeUnload(): void {
    console.log("asdddddddddddd")
  }


}
