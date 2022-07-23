import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponentComponent } from './reactive-component-form-control/reactive-component.component';
import { ReactiveComponentTemplateDrivenComponent } from './reactive-component-template-driven/reactive-component-template-driven.component';
import { ReactiveCompReactiveDrivenComponent } from './reactive-comp-reactive-driven/reactive-comp-reactive-driven.component';
import { ReactiveDrivenFormBuilderComponent } from './reactive-driven-form-builder/reactive-driven-form-builder.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicService } from './dynamic-form1.service';
import { DynamicBase1ControlService } from './dynamic-form1-control.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponentComponent,
    ReactiveComponentTemplateDrivenComponent,
    ReactiveCompReactiveDrivenComponent,
    ReactiveDrivenFormBuilderComponent,
    DynamicFormComponent,
    DynamicFormInputComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forRoot(
    //   [
    //     {path: "app-dynamic-form", component: DynamicFormComponent}
    //   ]
    // )
  ],
  providers: [
    DynamicService,
    DynamicBase1ControlService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
