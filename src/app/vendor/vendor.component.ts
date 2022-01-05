import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FilterComponent } from "../filter/filter.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
@Component({
  selector: "app-vendor",
  templateUrl: "./vendor.component.html",
  styleUrls: ["./vendor.component.scss"],
})
export class VendorComponent implements OnInit {
  vendorList = [
    {
      vendorName: "Joyalukkas",
      storeManager: "Rakesh",
      storeId: "JO568",
      storeEmail: "joyalukkas@gmail.com",
      phoneNumber: "9945912312",
      location: "Hyderbad",
      status: "pending",
    },
    {
      vendorName: "Joyalukkas",
      storeManager: "Rakesh",
      storeId: "JO569",
      storeEmail: "joyalukkas@gmail.com",
      phoneNumber: "9945912312",
      location: "Hyderbad",
      status: "approved",
    },
    {
      vendorName: "Joyalukkas",
      storeManager: "Rakesh",
      storeId: "JO567",
      storeEmail: "joyalukkas@gmail.com",
      phoneNumber: "9945912312",
      location: "Hyderbad",
      status: "freezed",
    },
  ];
  foods = [
    { value: "deny", viewValue: "Deny" },
    { value: "freeze", viewValue: "Freeze" },
    { value: "approve", viewValue: "Approve" },
    { value: "rating", viewValue: "Rating" },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  addVendor() {
    this.router.navigate(["add-vendor"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "vendor" },
    });
  }
  denyVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: "Denay",
    });
    console.log("denyVendor : " + vendor.storeId);
  }
  freezeVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: "Freeze",
    });
    console.log("freezeVendor : " + vendor.storeId);
  }
  approveVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: "Approve",
    });
    console.log("approveVendor : " + vendor.storeId);
  }
  ratingVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: "Rating",
    });
    console.log("ratingVendor : " + vendor.storeId);
  }
}
