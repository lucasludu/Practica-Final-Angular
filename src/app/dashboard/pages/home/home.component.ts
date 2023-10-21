import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable, Subscription } from 'rxjs';
import { OverlayKeyboardDispatcher } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  loading = false;
  clockSuscription: Subscription;

  constructor() {

    /*
    // Inicio Función de Promesa
    const getUsersPromise = new Promise((resolve, reject) => {

      const users: User[] = [
        {
          id: 1,
          name: 'Amto',
          lastName: 'Vaccari',
          email: 'amto@gmail.com'
        }
      ];

      setTimeout(() => {
        resolve(users); // OK
        // reject(users);  //  ERROR
      }, 5000);


    });
    // Fin Función de Promesa

    this.loading = true;
    getUsersPromise
      // SALIO TODO OK
      .then((result) => {
        console.log(result)
      })
      // ATRAPAMOS EL ERROR
      .catch((err) => {
        alert('Ocurrio un error inesperado.');
      })
      .finally(() => {
        this.loading = false;
      });

    console.log('Hola Carlito!');
    */


    this.getUsers();

    this.clockSuscription = this.getClock().subscribe({
      // OK => THEN
      next: (v) => {
        console.log(v)
      },
      // ERROR => CATCH
      error: (err) => {
        alert('Ocurrio un error')
      },
      // COMPLETA => FINALLY
      complete: () => {
        console.log('FINALIZO EL CONTADOR');
      },
    });


    this.getClock().subscribe({
      // OK => THEN
      next: (v) => {
        console.log('Segunda Subscripcion.')
      }
    });

  }

  ngOnDestroy(): void {
    console.log('Se destruyó el HOME');

    this.clockSuscription.unsubscribe();
  }

  /**
   * LA DIFERENCIA ENTRE EL OBSERVABLE Y LAS PROMESAS ES QUE EN
   * setInterval de la promesa se va ejecutar una sola vez el resolve 
   * y en el observable se va ir ejecutando cada sierto intervalo de tiempo
   */


  getClock(): Observable<number> {

    // la variable que termina con $ es un observable
    return new Observable((suscriber) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        suscriber.next(counter)
        // suscriber.error('Erro al mostrar la fecha')

        if (counter === 10) {
          suscriber.complete();
        }

      }, 1000);

    });

  }



  async getUsers(): Promise<void> {

    this.loading = true;
    const getUsersPromise = new Promise((resolve, reject) => {

      const users: User[] = [
        {
          id: 1,
          name: 'Amto',
          lastName: 'Vaccari',
          email: 'amto@gmail.com'
        }
      ];

      setTimeout(() => {
        resolve(users); // OK
        // reject(users);  //  ERROR
      }, 5000);


    });
    // Fin Función de Promesa


    // SE DETIENE AQUI HASTA QUE SE RESUELVA
    await getUsersPromise
      // SALIO TODO OK
      .then((result) => {
        console.log(result)
      })
      // ATRAPAMOS EL ERROR
      .catch((err) => {
        alert('Ocurrio un error inesperado.');
      })
      .finally(() => {
        this.loading = false;
      });

    // LUEGO CONTINUA 
    console.log('Hola Carlito!');

  }








}
