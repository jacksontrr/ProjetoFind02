import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { User } from "../interfaces/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DetalisProfService {
  private detalesColletion: AngularFirestoreCollection;
 //  private detalesColletion: AngularFirestoreCollection<Detalhes>;

  constructor(private afs: AngularFirestore) {
    this.detalesColletion = this.afs.collection('DETALHES-PROF');
   //  this.detalesColletion = this.afs.collection<Detalhes>('DETALHES-PROF');
  }

  getdetalhes() {
    return this.detalesColletion.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;

        return{id, ...data}
      })
    })
    );
  }

  adddetalhes(detalhes: string) {}

  getdetalhe(id: string) {}

  updatedetalhes(id: string, detalhes: string) {}

  deletedetalhes(id: string) {}
}
