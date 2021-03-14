import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropsBidingsChild } from './properties/props-bindings-child';
import { BackgroundColorDirective } from './properties/background-color.directive';
import { AttributeComponent } from './attribute/attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropsBidingsChild,
    BackgroundColorDirective,
    AttributeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BackgroundColorDirective]
})
export class AppModule { }
