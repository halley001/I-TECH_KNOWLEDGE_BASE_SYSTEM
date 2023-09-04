import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  onNavigate(){
    window.open("https://www.i-techsarl.com/documentation", "_blank");
}

}
