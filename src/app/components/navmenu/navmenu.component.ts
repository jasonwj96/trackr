import { Component, OnInit, OnChanges, SimpleChange } from "@angular/core";

@Component({
  selector: "app-navmenu",
  templateUrl: "./navmenu.component.html",
  styleUrls: ["./navmenu.component.scss"]
})
export class NavmenuComponent implements OnInit {
  path: string;
  activeBtnText: string;

  constructor() {}

  ngOnInit() {
    this.getPath();
  }

  getPath() {
    this.path = location.pathname.split("/").pop();
    this.path =
      this.path.substring(0, 1).toUpperCase() + this.path.substring(1);
    const buttons = Array.from(document.getElementsByClassName("navmenu-btn"));

    if (this.path === "") {
      buttons[0].classList.add("selected");
    } else {
      buttons.forEach(button => {
        Array.from(button.childNodes).forEach(node => {
          if (node.textContent === this.path) {
            button.classList.add("selected");
          }
        });
      });
    }
  }

  selectButton(event: any) {
    this.getPath();

    const selectedBtn = event.target;

    const buttons = Array.from(document.getElementsByClassName("navmenu-btn"));
    buttons.forEach(button => {
      button.classList.remove("selected");
    });
    selectedBtn.classList.add("selected");

    console.log(selectedBtn);
  }
}
