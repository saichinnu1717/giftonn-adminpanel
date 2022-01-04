import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      role: ["senior", Validators.required],
      department: ["it", Validators.required],
      status: ["active", Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
  reset() {
    this.form.reset();
    this.form.patchValue({
      role: "senior",
      department: "it",
      status: "active",
    });
  }
  close() {
    this.dialogRef.close();
    this.form.reset();
  }
  ngOnInit(): void {}
}
