import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { SharedService } from 'src/app/services/shared.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.css']
})
export class NuevoUserComponent implements OnInit {

  submitted = false;

   item: Users = {
    email: '',
    tipo: 0,
    token: '',
  }

   constructor(private sharedService: SharedService, private afs: AngularFirestore, public afAuth: AngularFireAuth) { }

   ngOnInit() {

   }

   nuevoDano() {

    this.item.tipo = Number(this.item.tipo);
    const itemCollection = this.afs.collection<Users>('users');
    itemCollection.add(this.item);
    this.submitted = true;
    window.scrollTo(0, 0);
  }

  nuevoToken(){
    let Token = this.afAuth.auth.createUserWithEmailAndPassword(this.item.email, 'Kforum2020');
    console.log(this.afAuth.idToken);


  }


  cancel() {
    this.sharedService.cancelar();
  }

}
