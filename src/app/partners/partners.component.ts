import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";
import { RatingForCustomerComponent } from "../rating-for-customer/rating-for-customer.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  patners = [
    {
      patnerName: "Apple",
      patnerId: "Ap1231",
      patnerEmailId: "apple@gmail.com",
      category: "Electronics",
      subCategory: "iPhone12 mini",
      country: "india",
      location: "Hyderabad",
      rating: "4.3",
      status: "Approved",
    },
    {
      patnerName: "Apple",
      patnerId: "Ap1232",
      patnerEmailId: "apple@gmail.com",
      category: "Electronics",
      subCategory: "iPhone12 mini",
      country: "india",
      location: "Hyderabad",
      rating: "4.3",
      status: "Pending",
    },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  addPartner() {
    this.router.navigate(["add-Partners"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "partner" },
    });
  }
  approvePatner(patner) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "partner",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  freezePatner(patner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Freeze", type: "partner", data: patner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyPatner(patner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "partner", data: patner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ratingPatner(patner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Rating", type: "partner", data: patner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  action(value) {
    console.log(value);
    if (value == "rating") {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "deny") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
