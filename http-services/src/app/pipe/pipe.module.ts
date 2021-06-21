import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AgePipe } from './age.pipe';
@NgModule({
  declarations: [InbuildPipeComponent, CustomPipeComponent, AgePipe,],
  imports: [CommonModule],
  exports: [ InbuildPipeComponent, CustomPipeComponent ],
  providers: [
    
  ]
})
export class PipeModule {}
