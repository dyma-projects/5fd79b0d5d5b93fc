import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Users$ = new BehaviorSubject<string[]>(null) ;
  public users:string[] = [];


  constructor() { }

  addUser(user:string){
    this.users.push(user);
    this.Users$.next(this.users);
    }
  
}
