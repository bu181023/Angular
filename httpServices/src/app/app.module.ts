import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { PipeModule } from './pipe/pipe.module';
import { IntegrationComponent } from './http-service/integration/integration.component';
import { HttpClientModule } from '@angular/common/http';
import { PostHttpModule } from './post-http/post-http.module';
@NgModule({
  declarations: [AppComponent, IntegrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StructuralDirectivesModule,
    PipeModule,
    HttpClientModule,
    PostHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
