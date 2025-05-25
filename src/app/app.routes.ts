import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindexampleComponent } from './components/event-bindexample/event-bindexample.component';

export const routes: Routes = [
  {path: 'for-directive-example', component:ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponentInputExampleComponent},
  {path: 'event-bind-example', component: EventBindexampleComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
