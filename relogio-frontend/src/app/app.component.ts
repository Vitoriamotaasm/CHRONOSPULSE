import { Component } from '@angular/core';
import { RelogioComponent } from './relogio/relogio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RelogioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Relógio de Contagem Regressiva';
}
