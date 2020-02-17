import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  image: string = "../../assets/bannerOne.jpg";
  title: string = "coucou";
  baseline: string = "ta mere";

  constructor() {}

  ngOnInit() {
    console.log(this.image);
  }
}
