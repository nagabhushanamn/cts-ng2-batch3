import { Component } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages: string[] = ["telugu", "tamil", "kannada", "malayalam", "other"];
  empModel: Employee = new Employee("", "N", true, "male", "");

  primarylanguageError = false;

  validatePrimarylanguage(lang) {
    if (lang === "default") {
      this.primarylanguageError = true;
    } else {
      this.primarylanguageError = false;
    }
  }

  capitalizeName(name) {
    console.log(name);
    return name.toUpperCase()
  }


  addEmployee(form, event) {
    event.preventDefault();
    console.log(form.value);
    // we can send to server...
  }

}
