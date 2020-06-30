import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonimGuard } from './common/guards/anonim.guard';
import { LoggedInGuard } from './common/guards/logged-in.guard';
import { HelpComponent } from './common/pages/help/help.component';
import { RefsComponent } from './common/pages/refs/refs.component';
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), canActivate: [AnonimGuard] },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule), canActivate: [LoggedInGuard] },
  { path: '', redirectTo: 'auth/session', pathMatch: 'full' },
  { path: 'help', component: HelpComponent },
  { path: 'refs', component: RefsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
