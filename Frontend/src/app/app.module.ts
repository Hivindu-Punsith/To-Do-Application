import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { AddTaskComponent } from './components/add-task/add-task.component';




const appRoutes:Routes=[

  {path:'',component:TasksComponent},
  {path:'edit/:id',component:TaskEditComponent},
  {path:'add',component:AddTaskComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavbarComponent,
    TaskEditComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
