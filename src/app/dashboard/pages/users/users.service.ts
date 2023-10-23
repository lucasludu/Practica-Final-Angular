import { Injectable, Inject } from '@angular/core';
import { User } from './models';
import { ApiUrl, ApiUrlConfig } from 'src/app/config/url.token';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


// @Injectable() // Si se saca el provdedIn se tiene que agregar en users.module
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('La url inyectada es: ', url);

    this.sendNotification$.subscribe({
      next: (message) => {
        alert(message);
      }
    });
  }


  private users: User[] = [
    {
      id: 1,
      name: 'Lucas',
      lastName: 'Ludu',
      email: 'lucas@gmail.com'
    },
    {
      id: 2,
      name: 'Daiana',
      lastName: 'Bilhere',
      email: 'dai@gmail.com'
    }
  ];

  private sendNotification$ = new Subject<string>();

  private users$ = new BehaviorSubject<User[]>([]);

  private usersObservable$ = this.users$.asObservable();

  sendNotification(notification: string): void {
    this.sendNotification$.next(notification);
  }

  // CARGO LOS DATOS QUE CREE EN LA LINEA 21
  loadUsers(): void {
    this.users$.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.usersObservable$;
  }
}

