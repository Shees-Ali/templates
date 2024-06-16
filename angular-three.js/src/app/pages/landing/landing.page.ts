import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
})
export class LandingPage extends BasePage implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;
  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.engineService.createScene(this.rendererCanvas);
    this.engineService.animate();
  }
}
