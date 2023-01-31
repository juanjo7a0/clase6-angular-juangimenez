import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AbueloComponent } from './clase5/abuelo/abuelo.component';
import { HijoUnoComponent } from './clase5/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase5/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase5/nieto-uno/nieto-uno.component';
import { FormulariosComponent } from './clase6/formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemplosMaterialComponent } from './clase7/ejemplos-material/ejemplos-material.component';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    FormulariosComponent,
    EjemplosMaterialComponent;
    AppInterpolacion,
    MiPrimerComponenteComponent,
    InterpolacionComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
