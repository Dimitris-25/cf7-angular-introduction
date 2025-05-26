import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindexampleComponent } from './components/event-bindexample/event-bindexample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Markos";

  // Step 1: One way binding of data

  // person = {
  //   givenName: "Markos",
  //   surName: "Karampatsis",
  //   age: 52,
  //   email: "mark@aueb.gr"

  // }

  // // Step 3: Component input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragoudakis",
  //   age:55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens Greece"
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@example.com",
  //   address: "New York, USA"
  // }

}  