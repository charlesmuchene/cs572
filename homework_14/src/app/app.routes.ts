import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ { path: 'users', loadChildren: './user/user.module#UserModule' } ];

export const appRoutes = RouterModule.forRoot(routes);
