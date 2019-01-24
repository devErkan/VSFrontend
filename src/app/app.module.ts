import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ToDoListeComponent } from './to-do-liste/to-do-liste.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [

  {
    path: 'ToDoListe',
    component: ToDoListeComponent
  },
  {
    path: 'Impressum',
    component: ImpressumComponent
  },

  {
    path: '',
    component: ToDoListeComponent,
    pathMatch: 'full'
  }


]


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    ToDoListeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
