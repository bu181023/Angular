import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [NgifComponent, NgforComponent, NgSwitchComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgifComponent, NgforComponent,NgSwitchComponent],
})
export class StructuralDirectivesModule {}
