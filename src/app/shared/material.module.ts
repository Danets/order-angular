import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';


const material = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
