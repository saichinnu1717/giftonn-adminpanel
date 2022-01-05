import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  userForm: FormGroup;
  vendorForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data.filterType);
    this.userForm = this.fb.group({
      role: ["senior", Validators.required],
      department: ["it", Validators.required],
      status: ["active", Validators.required],
    });
    this.vendorForm = this.fb.group({
      location: [""],
      vendorName: [""],
      storeId: [""],
      status: [""],
    });
  }

  get uf() {
    return this.userForm.controls;
  }
  get vf() {
    return this.vendorForm.controls;
  }

  submit() {
    console.log(this.userForm.value);
  }
  reset() {
    this.userForm.reset();
    this.userForm.patchValue({
      role: "senior",
      department: "it",
      status: "active",
    });
    this.vendorForm.reset();
  }
  close() {
    this.dialogRef.close();
    this.userForm.reset();
    this.vendorForm.reset();
  }
  ngOnInit(): void {}
}
