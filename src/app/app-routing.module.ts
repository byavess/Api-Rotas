import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
//
import { HomeComponent } from './home/home.component';
import { RequisicaoComponent } from './requisicao/requisicao.component';



const routes: Routes = [
 { path: "/", component: HomeComponent },

 { path: "requisicao", component: RequisicaoComponent },

 
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}