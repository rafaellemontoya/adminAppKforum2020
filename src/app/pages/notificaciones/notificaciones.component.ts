import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Notificacion>;
  items: Observable<Notificacion[]>;
  // Eliminar
  preguntaEliminar = false;
  eliminado = false;
  itemEliminar = '';
  nombreClienteEliminar = '';
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.itemsCollection = this.afs.collection<Notificacion>('notificaciones', ref => ref.orderBy('orden'));
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notificacion;
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
  getTextoStatus(id: number) {
    let tipo = '';
    switch (id) {
      case -1:
        tipo = 'INACTIVA';
        break;
        case 1:
          tipo = 'ENVIADA';
          break;

    }
    return tipo;
  }
  getClaseStatus(id: number) {
    let tipo = '';
    switch (id) {
      case -1:
        tipo = 'btn btn-danger br2 btn-xs fs12 dropdown-toggle';
        break;
        case 1:
          tipo = 'btn btn-success br2 btn-xs fs12 dropdown-toggle';
          break;

    }
    return tipo;
  }
}
