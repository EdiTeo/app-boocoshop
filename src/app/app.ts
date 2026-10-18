import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from '@/shared/ui/site-footer';
import { SiteHeader } from '@/widgets/site-header';

@Component({
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('boocoshop-frontend');
}
