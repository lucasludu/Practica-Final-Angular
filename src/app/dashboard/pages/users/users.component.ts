import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';

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

  users: User[] = [
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
  ]

  constructor(private matDialog: MatDialog) { }

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

            // OPCION 2
            this.users = this.users.map((a) => (a.id === user.id)
              ? ({ ...a, ...v })
              : a
            );
          }
        }
      });
  }

  onDeleteUser(userId: number): void {
    if (confirm('¿Desea eliminarlo?')) {
      this.users = this.users.filter(a => a.id !== userId);
    }
  }

}
