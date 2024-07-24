import { Component, HostListener, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../common/service/shared.service';
import { RouterModule } from '@angular/router';
import { canNavigateGuard } from '../../common/guards/can-navigate.guard';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.scss',
  providers: [canNavigateGuard],
})
export class C2Component implements OnDestroy {
  // isSaved = false;
  name: FormControl = new FormControl('sdasdas');

  constructor(public sharedService: SharedService) {
    this.name.disable();
  }

  ngOnDestroy(): void {
    console.log('sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

  edit() {
    this.sharedService.canNavigate = false;
    this.name.enable();
  }

  @HostListener('window:beforeunload', ['$event'])
  public onBeforeUnload(event: BeforeUnloadEvent): void {
    if (!this.sharedService.canNavigate) {
      event.preventDefault()
      // event.returnValue = false;
    }
  }
}
