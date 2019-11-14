import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { HttpService } from '../../services/http.service';
import { Tokens } from '../../interface/tokens.interface';

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
  constructor(private afs: AngularFirestore, private http: HttpService) { }
  private itemDoc: AngularFirestoreDocument<any>;
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
  getTokens(id: string, tipo: number, texto: string) {
    console.log(tipo);
    let uCollection: AngularFirestoreCollection<Users> = this.afs.collection<Users>('users', ref => ref.where('tipo', '==', tipo));
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    let tokens = uCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log(a);
        const data = a.payload.doc.data() as Users;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    let a: Array<string> = [];
    tokens.subscribe(data => {
      
      data.forEach(element => {
        console.log(element.token);
        a.push(element.token);
        
      })
      this.mostrarTokens(id , a, texto);
      



      // data.token 

    });





  }
  mostrarTokens(id: string, a , texto: string) {
    console.log(a);
    const tokens = new Tokens();
    tokens.arreglo = a;
    tokens.texto = texto;
    this.http.enviarNotificacion(tokens).subscribe(data => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.actualizarBD(id);
      }

    });
  }

  actualizarBD(id: string) {
    this.itemDoc = this.afs.doc<any>('notificaciones/' + id);
    this.itemDoc.update({estatus: 1} );


  }
  desactivarBD(id: string) {
    this.itemDoc = this.afs.doc<any>('notificaciones/' + id);
    this.itemDoc.update({estatus: -1} );


  }

  
}
