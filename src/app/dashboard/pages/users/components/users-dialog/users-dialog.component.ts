import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {

  userForm: FormGroup;

  // PARA CERRAR EL MODAL DESDE EL TS
  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogComponent>,

    // RECIBO LA DATA
    @Inject(MAT_DIALOG_DATA) public editUser?: User,
    ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(10)]]
    });

    if(this.editUser) {
      // Pisar los valores actuales
      this.userForm.patchValue(this.editUser);
    }
  }


  onSubmit() : void {
    if(this.userForm.invalid) {
      // TODOS LOS CONTROLES HAN SIDO MARCADOS
      this.userForm.markAllAsTouched();
    } else {
      // ENVIO EL VALOR DEL FORMULARIO CUANDO CIERRO LA VENTANA
      this.matDialogRef.close(this.userForm.value);
    }
  }

}
