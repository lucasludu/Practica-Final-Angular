import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})

//   REALIZA DATOS DE PRUEBA
export class MockUsersService {

  constructor() { }


  getUsers(): User[] {
    console.log('Retornando los datos del mock');
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
