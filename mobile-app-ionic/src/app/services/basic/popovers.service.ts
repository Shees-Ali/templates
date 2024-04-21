import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PopoversService {
  constructor(public popoverController: PopoverController) {}

  present(
    component: any,
    ev: any,
    data = {},
    cssClass = 'my-custom-class'
  ): Promise<any> {
    return new Promise(async (resolve) => {
      const popover = await this.popoverController.create({
        component,
        cssClass,
        event: ev,
        translucent: true,
        componentProps: data,
      });

      popover.onDidDismiss().then((v) => {
        resolve(v);
      });

      await popover.present();
    });
  }
}
