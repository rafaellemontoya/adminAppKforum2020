import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<User[]>;
  // Eliminar
  preguntaEliminar = false;
  eliminado = false;
  itemEliminar = '';
  nombreClienteEliminar = '';
  constructor(private afs: AngularFirestore) {
    this.getInfo();
   }

  ngOnInit() {
  }
  getInfo() {
    this.itemsCollection = this.afs.collection<User>('speakers', ref => ref.orderBy('orden'));
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

}

getTipoParticipante(id: number) {
  let tipo = '';
  switch (id) {
    case 1:
      tipo = 'Keynote Speaker';
      break;
      case 2:
        tipo = 'Speaker';
        break;
      case 3:
        tipo = 'Panelista';
        break;

  }
  return tipo;
}



}

