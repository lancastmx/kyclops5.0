import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from './componentes/radio/radio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { BandasComponent } from './componentes/bandas/bandas.component';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';

const routes: Routes = [
  { path: '', component: RadioComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'bandas', component: BandasComponent },
  { path: 'pruebas', component: PruebasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
