import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { DoNothingDirective } from './do-nothing.directive';
import { ComplexSelectorDirective } from './complex-selector.directive';
import { LoggableDirective } from './races/loggable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    DoNothingDirective,
    ComplexSelectorDirective,
    LoggableDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
