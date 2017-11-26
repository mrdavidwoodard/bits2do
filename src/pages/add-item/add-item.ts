import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})

export class AddItemPage {
  
  taskId: string;
  title: string;
  description: string;
  status: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public dataService: Data) {

  }

  ionViewDidLoad() {
    //let items = this.navParams.get('items');
  }

  saveItem() {
    let newItem = {
      taskId: this.taskId,
      title: this.title,
      description: this.description,
      status: this.status
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
