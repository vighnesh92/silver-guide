import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputEx2Component } from './input-ex2/input-ex2.component';
import { InputEx1Component } from './input-ex1/input-ex1.component';


@NgModule({
  declarations: [
    InputEx1Component,
    InputEx2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputEx1Component,
    InputEx2Component
  ]
})
export class ExamplesModule { }
