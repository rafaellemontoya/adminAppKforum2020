import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Agenda>;
  items: Observable<Agenda[]>;
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
    this.itemsCollection = this.afs.collection<Agenda>('agenda', ref => ref.orderBy('orden'));
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Agenda;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getTipoParticipante(id: number) {
    let tipo = '';
    switch (id) {
      case 1:
        tipo = 'Participante';
        break;
        case 2:
          tipo = 'Significant other';
          break;

    }
    return tipo;
  }
}
