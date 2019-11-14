import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-nueva-notificacion',
  templateUrl: './nueva-notificacion.component.html',
  styleUrls: ['./nueva-notificacion.component.css']
})
export class NuevaNotificacionComponent implements OnInit {

  submitted = false;

 item: Notificacion = {
  fecha: '',
  estatus: 0,
  orden: 0,
  texto: '',
  tipoParticipante: 0,

}

constructor(private sharedService: SharedService, private afs: AngularFirestore) { }

   ngOnInit() {

   }

   nuevoDano() {

    this.item.tipoParticipante = Number(this.item.tipoParticipante);
    this.item.estatus = Number(this.item.estatus);
    const itemCollection = this.afs.collection<Notificacion>('notificaciones');
    itemCollection.add(this.item);
    this.submitted = true;
    window.scrollTo(0, 0);
  }


  cancel() {
    this.sharedService.cancelar();
  }



}
