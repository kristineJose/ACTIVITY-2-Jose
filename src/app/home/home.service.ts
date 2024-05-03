import { Injectable } from '@angular/core';
import { User, iUser} from './home.model';
import { AlertController, ToastController } from '@ionic/angular';
import { addDoc, collection, getFirestore, getDocs,updateDoc, doc, deleteDoc, Firestore} from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  async getUsers(): Promise <iUser[]>{
    const app =initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    
    const users: User[] = [];

    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
      const user = doc.data() as User;
      user.title = doc.id;
      users.push(user);
      console.log(`${doc.id} => ${doc.data()}`);
    });
    return users;
  } 

  async tryAdd(user: User){
    const app =initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
    const docRefM1 = await addDoc(collection(firestore, "users"), {
      title: user.title,
      author: user.author,
      genre: user.genre,
      price: user.price

    });
    console.log("Document written in ID: ", docRefM1.id);
 
   } catch(e){
    console.error("Error adding document: ", e);
  }
}

async tryUpdate(user: User){
  const app =initializeApp(environment.firebaseConfig);
  const firestore = getFirestore(app);

  try{
    const docRef = doc(firestore, "users", user.title);
    await updateDoc(docRef, {title: user.title,
      author: user.author,
      genre: user.genre,
      price: user.price})

  }catch(e){
    console.error("Error adding document: ", e);
  }
}

async tryDelete(user: User){
  const app =initializeApp(environment.firebaseConfig);
  const firestore = getFirestore(app);

  try {
    const docRef = doc(firestore, "users", user.title);
    await deleteDoc(docRef);

  }catch(e){
    console.error("Error adding document: ", e)
  }
}
}

