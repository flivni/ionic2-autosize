import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Autosize} from "./directives/autosize.directive";

@NgModule({
  declarations: [
    Autosize
  ],
  providers: [],
  exports: [
    Autosize
  ],
  imports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AutosizeModule {}
