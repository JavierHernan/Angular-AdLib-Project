import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDrivenFormBuilderComponent } from './reactive-driven-form-builder/reactive-driven-form-builder.component';
import { ReactiveComponentTemplateDrivenComponent } from './reactive-component-template-driven/reactive-component-template-driven.component';
import { ReactiveComponentComponent } from './reactive-component-form-control/reactive-component.component';
import { ReactiveCompReactiveDrivenComponent } from './reactive-comp-reactive-driven/reactive-comp-reactive-driven.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app-reactive-driven-form-builder', component: ReactiveDrivenFormBuilderComponent},
  { path: 'app-reactive-component-template-driven', component: ReactiveComponentTemplateDrivenComponent},
  { path: 'app-reactive-component', component: ReactiveComponentComponent},
  { path: 'app-reactive-comp-reactive-driven', component: ReactiveCompReactiveDrivenComponent},
  { path: 'app-dynamic-form', component: DynamicFormComponent},
  { path: 'app-home', component: HomeComponent},
  { path: '', redirectTo: 'app-home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
