import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgIf,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
