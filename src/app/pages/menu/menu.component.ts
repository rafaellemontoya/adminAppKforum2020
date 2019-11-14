import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Menu>;
  items: Observable<Menu[]>;
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
    this.itemsCollection = this.afs.collection<Menu>('menu');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Menu;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  getActivo(id: number) {
    let tipo = '';
    switch (id) {
      case 1:
        tipo = 'Activo';
        break;
        case 0:
          tipo = 'Inactivo';
          break;

    }
    return tipo;
  }

  getClaseStatus(id: number) {
    let tipo = '';
    switch (id) {
      case 0:
        tipo = 'btn btn-danger br2 btn-xs fs12 dropdown-toggle';
        break;
        case 1:
          tipo = 'btn btn-success br2 btn-xs fs12 dropdown-toggle';
          break;

    }
    return tipo;
  }

}
