import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environments/environment';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


bootstrapApplication(AppComponent,{
    providers: [
      provideRouter([]),
      importProvidersFrom(FormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule
      ), provideFirebaseApp(() => initializeApp({ projectId: "lms-firebase-d7049", appId: "1:448538370712:web:bf3d38aeb0d4c0e146e6ed", storageBucket: "lms-firebase-d7049.firebasestorage.app", apiKey: "AIzaSyAD6PL1EEZ58erlQhj9qf0LlhIZyXlkHbc", authDomain: "lms-firebase-d7049.firebaseapp.com", messagingSenderId: "448538370712" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
      provideFirestore(()=> getFirestore()),
    ],
  } 
).catch((err) => console.error(err));
