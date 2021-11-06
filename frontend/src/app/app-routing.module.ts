import { PeopleReadComponent } from './people/people-read/people-read.component';
import { PeopleDeleteComponent } from './people/people-delete/people-delete.component';
import { PeopleUpdateComponent } from './people/people-update/people-update.component';
import { PeopleCreateComponent } from './people/people-create/people-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PeopleCrudComponent } from './views/people-crud/people-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent 
  },
  {
    path: "pessoas",
    component: PeopleCrudComponent
  },
  {
    path: "pessoas/criar",
    component: PeopleCreateComponent
  },
  {
    path:"pessoas/listar",
    component: PeopleReadComponent
  },
  {
    path: "pessoas/atualizar/:id",
    component: PeopleUpdateComponent
  },
  {
    path: "pessoas/deletar/:id",
    component: PeopleDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
