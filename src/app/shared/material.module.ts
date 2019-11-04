import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';


const material = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatListModule,
  MatMenuModule
]

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule { }
