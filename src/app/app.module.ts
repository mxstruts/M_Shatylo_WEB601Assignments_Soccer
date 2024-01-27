// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    ContentCardComponent
    // Other components, directives, and pipes go here
  ],
  imports: [BrowserModule],
  bootstrap: [ContentCardComponent] // AppComponent removed from bootstrap
})
export class AppModule {}
