import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


const material = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
