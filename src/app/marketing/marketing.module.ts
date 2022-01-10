import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MarketingComponent } from "./marketing.component";
import { AddProductLaunchComponent } from "../add-product-launch/add-product-launch.component";

const routes: Routes = [
  { path: "", component: MarketingComponent },
  { path: "add-product-launch", component: AddProductLaunchComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class MarketingModule {}
