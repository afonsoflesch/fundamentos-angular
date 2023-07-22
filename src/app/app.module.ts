import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { FormsModule } from "@angular/forms";
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { MembroFamiliaComponent } from './membro-familia/membro-familia.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent,
    MembroFamiliaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
