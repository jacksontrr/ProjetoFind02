import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DetalisProfService {

 private detalesColletion: AngularFirestoreCollection;
 // private detalesColletion: AngularFirestoreCollection<Detalhes>;

  constructor(private afs: AngularFirestore) {
  this.detalesColletion = this.afs.collection('DETALHES-PROF');
  // this.detalesColletion = this.afs.collection<Detalhes>('DETALHES-PROF');
  }

getdetalhes(){

}

adddetalhes(detalhes: Detalhes){

}

getdetalhes(id: string){

}

updatedetalhes(id: string, detalhes: Detalhes){

}
deletedetalhes(id: Detalhes){

}
}
