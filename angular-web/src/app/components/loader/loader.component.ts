import { Component, Injector } from '@angular/core';
import { BasePage } from '../../base/base';
import { ImportsModule } from '../../imports/imports.module';

@Component({
  selector: 'app-loader',
  imports: [ImportsModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent extends BasePage {
  showLoader: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.utility.isLoading.subscribe((value) => {
      this.showLoader = value;
    });
  }
}
