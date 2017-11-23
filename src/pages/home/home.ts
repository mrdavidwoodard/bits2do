import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

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
  }
  updateItem(item) {
      this.items.push(item);
  }

  removeItem(item){
    this.items.remove(item);
  }

}
