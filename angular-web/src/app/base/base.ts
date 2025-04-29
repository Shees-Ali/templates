import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility/utility.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NavService } from '../services/utility/nav.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from '../services/utility/layout.service';
import { StorageService } from '../services/utility/storage.service';
import { ThemeService } from '../services/utility/theme.service';

// Base Class containing all services for the app
export abstract class BasePage {
  public formBuilder: FormBuilder;
  public utility: UtilityService;
  public router: Router;
  public dialogService: DialogService;
  public ref: DynamicDialogRef;
  public layoutService: LayoutService;
  public nav: NavService;
  public storageService: StorageService;
  public themeService: ThemeService;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.utility = injector.get(UtilityService);
    this.router = injector.get(Router);
    this.dialogService = injector.get(DialogService);
    this.ref = injector.get(DynamicDialogRef);
    this.nav = injector.get(NavService);
    this.layoutService = injector.get(LayoutService);
    this.storageService = injector.get(StorageService);
    this.themeService = injector.get(ThemeService);
  }
}
