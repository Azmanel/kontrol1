import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kontrol1';
  models: string[] = [];
  private Sub: Subscription;
  constructor(private route: ActivatedRoute) {
    this.Sub = route.queryParams.subscribe(qparams => {
      if (qparams["id"] !== undefined) {
        this.models.push(qparams["id"]);
        
        let data = JSON.stringify({
          id: qparams["id"],
          product: qparams["product"],
          date: qparams["date"],
          price: qparams["price"],
        });
        localStorage.setItem(qparams["id"], data);
      }
    })
  }
}