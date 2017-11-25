import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

 
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
 
}
