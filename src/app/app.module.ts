import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ReactiveFormsModule } from  '@angular/forms';
import { CambiarTituloPipe } from './models/cambiar-titulo.pipe';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyInterceptor } from "./shared/my-interceptor";



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    CambiarTituloPipe,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalDialogComponent
  ]
})
export class AppModule { }
