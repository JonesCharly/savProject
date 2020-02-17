import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() baseline: string;
  constructor() {}

  ngOnInit() {
    console.log(this.src);
  }
}
