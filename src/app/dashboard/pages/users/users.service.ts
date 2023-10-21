import { Injectable, Inject } from '@angular/core';
import { User } from './models';
import { ApiUrl, ApiUrlConfig } from 'src/app/config/url.token';


// @Injectable() // Si se saca el provdedIn se tiene que agregar en users.module
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('La url inyectada es: ', url)
  }


  getUsers(): User[] {
    return [
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
  }
}
