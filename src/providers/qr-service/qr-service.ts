import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { EmailComposer } from '@ionic-native/email-composer';

import { ModalController, Platform, ToastController } from "ionic-angular"
import { ModalPageComponent } from "../../pages/modal/modal.component"

@Injectable()
export class QRServiceProvider {

  private _historical: ScanData[] = [];
  constructor(private iab: InAppBrowser, 
    private modalCtrl: ModalController, 
    private contacts: Contacts, 
    private platform: Platform, 
    private toastCtrl: ToastController,
    private emailComposer: EmailComposer) {}

  add(qrData) {
    let data = new ScanData(qrData);
    // unshift new to old, push old to new
    this._historical.unshift(data);
    console.log(this._historical);
    this.openScan(0);
  }

  openScan(index: number) {
    let scanData = this._historical[index];
    console.log("Information", scanData.information);
    console.log("Type", scanData.type);
    switch(scanData.type) {
      case "http":
        this.iab.create(scanData.information, "_system");
        break;
      case "map":
        this.modalCtrl.create(ModalPageComponent, { coords: scanData.information }).present();
      break;
      case "contact":
        this.createContact(scanData.information);
        break;
      default:
        console.error("Error", "Not Supported");
    }
  }

  private createContact(text: string) {
    let fields:any = this.parseVcard(text);
    let contact: Contact = this.contacts.create();
    // name
    let name = fields.fn;
    // phone
    let phone = fields.tel[0].value[0];
    if( !this.platform.is('cordova')) {
      console.warn("Can't create contacts in the computer");
      return;
    }
    contact.name = new ContactName(null, name);
    contact.phoneNumbers = [new ContactField('mobile', phone)];
    contact.save().then(
      () => this.handlerToast("Contact " + name + " created"))
      .catch(
        (error) => this.handlerToast("Error: " + error)
      )
    console.log(fields);
  }

  private handlerToast(msg: string) {
      this.toastCtrl.create({
        message: msg, 
        duration: 2500
      }).present();
  }

  // Parses the vcard information
  private parseVcard( input:string ) {
    
        var Re1 = /^(version|fn|title|org):(.+)$/i;
        var Re2 = /^([^:;]+);([^:]+):(.+)$/;
        var ReKey = /item\d{1,2}\./;
        var fields = {};
    
        input.split(/\r\n|\r|\n/).forEach(function (line) {
            var results, key;
    
            if (Re1.test(line)) {
                results = line.match(Re1);
                key = results[1].toLowerCase();
                fields[key] = results[2];
            } else if (Re2.test(line)) {
                results = line.match(Re2);
                key = results[1].replace(ReKey, '').toLowerCase();
    
                var meta = {};
                results[2].split(';')
                    .map(function (p, i) {
                    var match = p.match(/([a-z]+)=(.*)/i);
                    if (match) {
                        return [match[1], match[2]];
                    } else {
                        return ["TYPE" + (i === 0 ? "" : i), p];
                    }
                })
                    .forEach(function (p) {
                    meta[p[0]] = p[1];
                });
    
                if (!fields[key]) fields[key] = [];
    
                fields[key].push({
                    meta: meta,
                    value: results[3].split(';')
                })
            }
        });
    
        return fields;
    };

  getHistorical() {
    return this._historical;
  }
}
