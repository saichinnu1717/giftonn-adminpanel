import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { AddProductComponent } from "../add-product/add-product.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "add-product", component: AddProductComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class ProductModule {}
