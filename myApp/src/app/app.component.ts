import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Meu Aplicativo';  
  test = true; 
  camposValidos(camposvalidados: any) {
    if(this.test === true) {
      camposvalidados = true;
    } else {
      camposvalidados = false;
    }
    return camposvalidados;
  } 

}
