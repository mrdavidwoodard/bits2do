import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
//import { HttpModule } from '@angular/http';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
import { Data } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  status: string = "pending";

  listChange(event) {
   this.status = event.value;
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public storage: Storage) {

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
    this.dataService.save(this.items);
  }
  
  editItem(item){
    let editModal = this.modalCtrl.create(EditItemPage, { item: item });
    this.removeItem(item);
    editModal.onDidDismiss((item) => {
      
      if(item) {
        this.updateItem(item);
        console.log(item);
      }
      
    });

    editModal.present();
  }

  updateItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
    
  }
  

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item 
    });
  }

  removeItem(item){
    this.items.splice(this.items.indexOf(item),1);
    this.dataService.save(this.items);
  }

}
