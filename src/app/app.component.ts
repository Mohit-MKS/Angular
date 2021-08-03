import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {

  }
  data:any = [];
  onClickSubmit(event:any) {
    let name = event.target.name;
    let gender = event.target.gender;
    let doj = event.target.doj;
    let address = event.target.address;

    if (name.value.trim() !== "" && gender.value !== "" && doj.value !== "" && address.value !== "") {
      this.data.push({
        name:name.value,
        gender:gender.value,
        doj:doj.value,
        address:address.value,
      });
      name.value = "";
      gender.value = "";
      doj.value = "";
      address.value = "";
    }

  }
}
