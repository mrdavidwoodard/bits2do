import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

 
@Injectable()
export class Data {

  items: any;
 
  constructor(public storage: Storage){


  }
 
  getData() {
    return this.storage.get('todos'); 
  }

  save(data){
    this.storage.set('todos', data);
  }

  update(data){
    this.storage.set('todos', data);
  }

  remove(data){
    return this.storage.remove(data);
  }

 
}
