import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon';
}
