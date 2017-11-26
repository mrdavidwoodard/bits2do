import { Component } from '@angular/core';
import { ModalController, NavController, Platform } from 'ionic-angular';
//import { HttpModule } from '@angular/http';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  status: string = "pending";
  isAndroid: boolean = true;
  listChange(event) {
   this.status = event.value;
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public platform: Platform) {

    this.isAndroid = platform.is("android");

    this.dataService.getData().then((todos) => { 
      if(todos) {
        this.items = todos;
      }
    });


  }

  ionViewDidLoad() {
    
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item); 
      }
    });

    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    return this.items;
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item 
    });
  }

  editItem(item){
    this.navCtrl.push(EditItemPage, {
      item: item 
    });
    return this.items;
  }

  removeItem(item){
    this.items.splice(this.items.indexOf(item),1);
  }

}
