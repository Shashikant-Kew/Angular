import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatedFormComponent } from './components/templated-form/templated-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TabtestComponent } from './components/tabtest/tabtest.component';

@NgModule({
  declarations: [RootComponent, TemplatedFormComponent, ReactiveFormComponent, TabtestComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        }
      }
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }