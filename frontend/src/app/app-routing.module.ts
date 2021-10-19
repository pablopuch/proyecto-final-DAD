import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


//Components
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
