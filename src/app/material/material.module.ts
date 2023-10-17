import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModule = [
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule,
];

@NgModule({
  imports: [CommonModule, ...materialModule],
  exports: [...materialModule],
})
export class MaterialModule {}
