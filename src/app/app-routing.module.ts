import { NgModule } from '@angular/core';
/* You'll configure the router with Routes in the RouterModule 
 * so import those two symbols from the @angular/router library.
 */
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
  
];

/* *
 * Exporting RouterModule makes router directives available 
 * for use in the AppModule components that will need them.
 * */
@NgModule({
  /* You first must initialize the router and start it listening for browser location changes.
   * The forRoot() method supplies the service providers and directives needed for routing, 
   * and performs the initial navigation based on the current browser URL.
   */
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})

export class AppRoutingModule { }
