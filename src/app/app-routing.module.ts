import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FilmodelComponent } from './filmodel/filmodel.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path: "",component: HomeComponent },
{path: "models/:id",component:ModelsComponent},
{path: "fill_model",component:FilmodelComponent},
{path: "about",component:AboutComponent},
{path: "**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
