import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './users.service';
import { MockUsersService } from './mock-users.service';
import { ApiUrl } from 'src/app/config/url.token';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [ // COMO LO TENGO EN EL USER SERVICE NO HACE FALTA
    UsersService,
    {
      // Cuando se inyecte UserService
      provide: UsersService,
      // En realidad use:
      // useClass: MockUsersService
      useClass: UsersService
    },
    {
      provide: ApiUrl,
      useValue: {
        url: 'http://localhost:8000/users'
      }
    }
  ]
})
export class UsersModule { }
