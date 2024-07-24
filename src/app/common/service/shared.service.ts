import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  canNavigate : boolean = true;

  constructor() { }
}
