import { Component } from '@angular/core';
import { myService } from './myservice.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, {{ name }}</h1><br />
            <h2>Course Selection</h2>
            <course></course>`,
  providers: [myService]
})
export class AppComponent {

  constructor(myService: myService){
    this.name = myService.getName();
  }
}
