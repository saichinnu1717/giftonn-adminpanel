import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { AddUserComponent } from "../add-user/add-user.component";
import { Routes, RouterModule } from "@angular/router";
import { EditUserComponent } from "../edit-user/edit-user.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:userId", component: EditUserComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class UsersModule {}
