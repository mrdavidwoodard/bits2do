import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})

export class EditItemPage {
  
  title: string;
  description: string;
  status: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;
  }

  
  updateItem() {
    let updatedItem = {
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
