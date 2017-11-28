import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})

export class EditItemPage {
  
  taskId: string;
  title: string;
  description: string;
  status: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public dataService: Data, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.taskId = this.navParams.get("item").taskId;
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;
 
  }

  
  updateItem(item) {

    let updateItem = {
      taskId: this.taskId,
      title: this.title,
      description: this.description,
      status: this.status
    }
    this.storage.set(updateItem.taskId, this.taskId);
    console.log(this.taskId);
    this.storage.set(updateItem.title, this.title);
    console.log(this.title);
    this.storage.set(updateItem.description, this.description);
    console.log(this.description);
    this.storage.set(updateItem.status, this.status);
    console.log(this.status);
    this.view.dismiss(updateItem);
      
  }

  close() {
    this.view.dismiss();
  }

}
