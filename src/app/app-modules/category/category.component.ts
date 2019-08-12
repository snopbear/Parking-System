


import { DataFilterService } from './../../infrastructure/core/data-filter/data-filter.service';
import { Component, OnInit } from '@angular/core';
import { Sorter } from 'src/app/infrastructure/core/sorter/sorter';
import { TrackByService } from 'src/app/infrastructure/core/tracker/trackby.service';
import { AlertifyService } from 'src/app/infrastructure/core/alertify-configurations/alertify.service';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/infrastructure/common/models/category';
import { CategoryService } from 'src/app/infrastructure/common/service/category/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = new Category();

  categories: Category[];

  totalRecords = 0;

  editMode = true;


  selectedValue = null;

  // tslint:disable-next-line:max-line-length
  constructor(private categoryService: CategoryService, private sorter: Sorter, private dataFilter: DataFilterService,
              public trackby: TrackByService, private alertify: AlertifyService) { }


  sort(prop: string) {
    this.sorter.sort(this.categories, prop);
  }

  //#region get
  getPage() {

    this.categoryService.get()
      .subscribe((response: Category[]) => {
        debugger
        this.categories = response;
        this.totalRecords = this.categories.length;
        this.editMode = true;
        this.alertify.success('Successfully Loaded');
      }, (err) => this.alertify.error(err));
  }
  // #endregion


  showadd() {
    this.editMode = true;
    this.category = {};
  }


  // tslint:disable-next-line:no-shadowed-variable
  editshow(category: Category) {
    this.category = category;
    this.editMode = false;

  }
  //#endregion


  // #region add
  add(form?: NgForm): void {
    debugger
    this.categoryService.add(this.category).subscribe(
      (data: Category) => {
        this.getPage();
        this.alertify.success(data.name);
      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  // #endregion




  //#region edit
  edit(form?: NgForm) {

    this.categoryService.edit(this.category).subscribe(
      (data: Category) => {
        this.alertify.success('Successfully update ' + data.name);

      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  //#endregion

    //#region delete
    delete(category: Category) {
      this.categoryService.delete(category).subscribe(
        () => {
          this.alertify.success(`Room with ID = ${category.id} Deleted`);
          this.getPage();
         },
        (err) => {
          this.alertify.error(err);
        } );
    }
    //#endregion

  ngOnInit() {
    this.getPage();
  
  }

  //#region reset
  reset(form?: NgForm) {

    if (form != null) {
      form.reset();
    }
  }
  //#endregion

}
