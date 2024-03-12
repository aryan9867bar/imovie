import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), HttpClientModule, NgModule, BrowserModule, CommonModule ]
};
