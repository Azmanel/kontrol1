import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmodel',
  templateUrl: './filmodel.component.html',
  styleUrls: ['./filmodel.component.css']
})
export class FilmodelComponent implements OnInit {
  model = {
    id: 0,
    product: "",
    date: 0,
    price: 0

  }
  constructor(private router: Router) { }


  ngOnInit() {
  }

  addItem() {
    this.router.navigate(["/models/:"], {
      queryParams: {
        "id": this.model.id,
        "product": this.model.product,
        "date": this.model.date,
        "price": this.model.price,
      }
    })
  }
}
