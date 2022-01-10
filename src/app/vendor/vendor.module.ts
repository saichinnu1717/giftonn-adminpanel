import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VendorComponent } from "./vendor.component";
import { AddVendorComponent } from "../add-vendor/add-vendor.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: VendorComponent },
  { path: "add-vendor", component: AddVendorComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class VendorModule {}
