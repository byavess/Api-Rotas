
import { RouterModule } from '@angular/router';
//imports basicos pra rotas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoracaoService } from './coracao.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RequisicaoComponent } from './requisicao/requisicao.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisicaoComponent
    
    
   
  
      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 AppRoutingModule,
   FormsModule,
   RouterModule

    

    
    
   
  ],
  providers: [CoracaoService], //colocar component api
  bootstrap: [AppComponent]
})
export class AppModule { }
