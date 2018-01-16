import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuntasiComponent } from './nuntasi/nuntasi.component';

//Services
import { NuntasiService } from './services/nuntasi.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    NuntasiComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [NuntasiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
