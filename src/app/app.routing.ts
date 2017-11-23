import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { PortfolioComponent }   from './portfolio/portfolio.component';
import { ServicesComponent }   from './services/services.component';
import { AboutComponent }   from './about/about.component';
import { ContactComponent }   from './contact/contact.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'services', component:  ServicesComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'contact', component: ContactComponent}
];

export const appRouting = {
  routes: RouterModule.forRoot(routes),
  components: [ HomeComponent, PortfolioComponent, ServicesComponent, AboutComponent, ContactComponent ]
};