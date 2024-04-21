import { Injector } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Location } from '@angular/common';
import { Platform, MenuController } from '@ionic/angular';
import { EventsService } from 'src/app/services/events.service';
import { FormBuilder } from '@angular/forms';
import { PopoversService } from 'src/app/services/basic/popovers.service';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'src/app/services/basic/modal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NavService } from '../services/nav.service';

export abstract class BasePage {
  public network: NetworkService;
  public utility: UtilityService;
  public nav: NavService;
  public location: Location;
  public events: EventsService;
  public platform: Platform;
  public formBuilder: FormBuilder;
  public popover: PopoversService;
  public users: UserService;
  public modals: ModalService;
  public menuCtrl: MenuController;
  public domSanitizer: DomSanitizer;

  constructor(injector: Injector) {
    this.platform = injector.get(Platform);
    this.users = injector.get(UserService);
    this.network = injector.get(NetworkService);
    this.utility = injector.get(UtilityService);
    this.location = injector.get(Location);
    this.events = injector.get(EventsService);
    this.nav = injector.get(NavService);
    this.formBuilder = injector.get(FormBuilder);
    this.popover = injector.get(PopoversService);
    this.modals = injector.get(ModalService);
    this.menuCtrl = injector.get(MenuController);
    this.domSanitizer = injector.get(DomSanitizer);
  }
}
