import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
  ],
  exports: [UserDetailsComponent],
})
export class PetStoreModule {}
