import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuntasiComponent } from './nuntasi/nuntasi.component';
import { NuntasiService } from './services/nuntasi.service';
import { AuthService } from './services/auth.service';
import { InfoNuntasiComponent } from './info-nuntasi/info-nuntasi.component';
import { NuntasNouComponent } from './nuntas-nou/nuntas-nou.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    NuntasiComponent,
    InfoNuntasiComponent,
    NuntasNouComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [NuntasiService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [NuntasNouComponent]
})
export class AppModule { }
