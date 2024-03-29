import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-editar-clasificacion-equipo',
  templateUrl: './editar-clasificacion-equipo.component.html',
  styleUrls: ['./editar-clasificacion-equipo.component.css']
})
export class EditarClasificacionEquipoComponent implements OnInit {
  mensajeErrorImg = '';
  claseCargaImg = '';
  porcentajeCargaImg: any ;
  submitted = false;
  imgError = false;
  selectedFile = null;
  estadoCargaImg = false;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;


  idRecibido = '';
  private itemDoc: AngularFirestoreDocument<ClasificacionEquipo>;
  itemRecibido: Observable<ClasificacionEquipo>;
  itemC: ClasificacionEquipo = {
    key: '',
    nombre: '',
    manual: '',
    paginas: '',
    item: 0,
    pais: '',
    usuarioAlta:'',
    fechaAlta:0,
    fechaEdicion: 0,
    nombreBusqueda:'',
    estado: 0,

    };

  constructor(private sharedService: SharedService,
              private route: ActivatedRoute, private afs: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params
    .subscribe( parametros => {
    this.idRecibido = parametros.id;
    console.log(parametros.id);
    this.obtenerInformacion(this.idRecibido);
   });
 }

  obtenerInformacion(idRecibido) {

    this.itemDoc = this.afs.doc<ClasificacionEquipo>('equipmentType/' + idRecibido);
    this.itemDoc.valueChanges().subscribe(data => {
      console.log(data);
      this.itemC = data;
    });


    // console.log(this.item.nombre);

  }


  crearItem() {
    console.log(this.itemC);
    this.itemC.pais = 'MX';

    this.itemC.fechaEdicion = new Date().getTime();
    this.itemC.nombreBusqueda = this.sharedService.corregirCaracteres(this.itemC.nombre);
    this.itemDoc = this.afs.doc<ClasificacionEquipo>('equipmentType/' + this.idRecibido);
    this.itemDoc.update(this.itemC);
    this.submitted = true;

    window.scrollTo(0, 0);
  }
  cancel() {
    this.sharedService.cancelar();
  }


}
