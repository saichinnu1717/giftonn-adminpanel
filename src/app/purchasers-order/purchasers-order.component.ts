import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";

@Component({
  selector: "app-purchasers-order",
  templateUrl: "./purchasers-order.component.html",
  styleUrls: ["./purchasers-order.component.scss"],
})
export class PurchasersOrderComponent implements OnInit {
  generateOpt: FormGroup;
  generateQr: FormGroup;
  Orders = [
    {
      orderId: "258664",
      customerId: "258586",
      storeId: "225466",
      purchasername: "Sai Krishna",
      category: "Jewellery",
      subCategory: "Bracelet",
      productId: "JOY56882",
      productName: "Bracelet",
      netPrice: "15000",
      totalPrice: "16000",
      status: "Pending",
    },
    {
      orderId: "258664",
      customerId: "258586",
      storeId: "225466",
      purchasername: "Sai Krishna",
      category: "Jewellery",
      subCategory: "Bracelet",
      productId: "JOY56882",
      productName: "Bracelet",
      netPrice: "15000",
      totalPrice: "16000",
      status: "Refunded",
    },
    {
      orderId: "258664",
      customerId: "258586",
      storeId: "225466",
      purchasername: "Sai Krishna",
      category: "Jewellery",
      subCategory: "Bracelet",
      productId: "JOY56882",
      productName: "Bracelet",
      netPrice: "15000",
      totalPrice: "16000",
      status: "Confirmed",
    },
    {
      orderId: "258664",
      customerId: "258586",
      storeId: "225466",
      purchasername: "Sai Krishna",
      category: "Jewellery",
      subCategory: "Bracelet",
      productId: "JOY56882",
      productName: "Bracelet",
      netPrice: "15000",
      totalPrice: "16000",
      status: "Cancelled",
    },

  ];
  coupons = [{
    code: "ASDVM56",
    storeid: "JOY2255",
    storeName: "Joyalukkas",
    couponType: "flat",
    amount: "500",
    category: "jewellary",
    subCategort: "Bracelet",

  }]
  constructor(public dialog: MatDialog, private fb: FormBuilder,) {
    this.generateOpt = this.fb.group({
      orderid: ["", Validators.required],
      confirmedOtp: ["", Validators.required]
    });
    this.generateQr = this.fb.group({
      qrNumber: ["", Validators.required],
      purchasername: ["", Validators.required],
      productName: ["", Validators.required],
      productId: ["", Validators.required],
      SubCategory: ["", Validators.required],
      category: ["", Validators.required],
      storeid: ["", Validators.required],
      mobileNumber: ["", Validators.required],
    });
  }

  ngOnInit(): void { }
  QrSubmit() {
    console.log("this.generateQr.value", this.generateQr.value);
  }
  OptSubmit() {
    console.log("this.generateOpt.value", this.generateOpt.value);
  }
  action(value) {
    console.log(value);
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "purchasersOrder",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approve") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "30%",
        data: "purchasersOrder",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
