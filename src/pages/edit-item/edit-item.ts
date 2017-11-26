import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})

export class EditItemPage {
  
  taskId: string;
  title: string;
  description: string;
  status: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public dataService: Data) {

  }

  ionViewDidLoad() {
    this.taskId = this.navParams.get("item").taskId;
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;
  }

  
  updateItem(item) {
    let updatedItem = {
      taskId: this.taskId,
      title: this.title,
      description: this.description,
      status: this.status
    };
    
    this.view.dismiss(updatedItem);
  }

  close() {
    this.view.dismiss();
  }

}
