import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Observable, filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  userName = '';

  testUser: User = {
    id: 1,
    name: 'Lucas',
    lastName: 'Ludu',
    email: 'lucas@gmail.com'
  };

  // users: User[] = [];
  users: Observable<User[]>;




  constructor(
    private matDialog: MatDialog,
    private userService: UsersService,  // MockUserService
    private notifierService: NotifierService
  ) {
    this.users = this.userService.getUsers();
    this.userService.loadUsers();

    of(1, 2, 3, 4, 5)
      .pipe(
        tap((valor) => {
          console.log('valor: ', valor);
        }),
        // map((v) => v * 2),
        // tap((valorMapeado) => {
        //   console.log('valor mapeado: ', valorMapeado)
        // }),
        filter(v => v < 3)
      )
      .subscribe({
        next: (v) => {
          console.log(v);
        }
      });

      /*
    of([1, 2, 3, 4, 5])
    .pipe(
      tap((valor) => {
        console.log('valor: ', valor);
      }),
      map(v => (v.map((numero) => numero * 2))),
      tap((valorMapeado) => {
        console.log('valor mapeado: ', valorMapeado)
      }),
    )
    .subscribe({
      next: (v) => {
        console.log(v);
      }
    });
    */


    /* Al tener el pipe async se comenta esta suscripción.
    this.userService.getUsers().subscribe({
      next: (v) => {
        this.users = v;
        this.notifierService.showSuccess('Cargado Exitoso', 'Se cargaron los usuarios');
      }
    });
    */
  }


  /*  openUsersDialog(): void 
  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log('valor: ', v);
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v,
                id: new Date().getTime(),
              }
            ];
          }
        }
      });
  }
  */

  /*  onEditUser(user: User): void 
  onEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            /* OPCION 1
            // CREO COPIA DEL ARRAY ACTUAL
            const arrayNuevo = [...this.users];
            // BUSCO INDICE DEL USUARIO QUE QUIERO MODIFICAR
            const indexToEdit = arrayNuevo.findIndex(a => a.id === user.id);
            // NUEVO VALOR DEL USUARIO MODIFICADO
            arrayNuevo[indexToEdit] = { ...arrayNuevo[indexToEdit], ...v };
  
            this.users = [...arrayNuevo ]
            */
            /*
            // OPCION 2
            this.users = this.users.map((a) => (a.id === user.id)
              ? ({ ...a, ...v })
              : a
            );
          }
        }
      });
  }
  */

  /*   onDeleteUser(userId: number): void 
  onDeleteUser(userId: number): void {
    if (confirm('¿Desea eliminarlo?')) {
      this.users = this.users.filter(a => a.id !== userId);
    }
  }
  */

}
