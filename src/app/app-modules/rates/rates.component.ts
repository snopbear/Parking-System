import { Category } from 'src/app/infrastructure/common/models/category';
import { Component, OnInit } from '@angular/core';
import { Rate } from 'src/app/infrastructure/common/models/rate';
import { Sorter } from 'src/app/infrastructure/core/sorter/sorter';
import { DataFilterService } from 'src/app/infrastructure/core/data-filter/data-filter.service';
import { TrackByService } from 'src/app/infrastructure/core/tracker/trackby.service';
import { AlertifyService } from 'src/app/infrastructure/core/alertify-configurations/alertify.service';
import { NgForm } from '@angular/forms';
import { RateService } from 'src/app/infrastructure/common/service/rate/rate.service';
import { CategoryService } from 'src/app/infrastructure/common/service/category/category.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {


  rate: Rate = new Rate();

  rates: any[];

  categories: Category[];

  totalRecords = 0;
  editMode = true;
  categoryId = null;
  rateTypeId = null;
  // tslint:disable-next-line:max-line-length
  constructor(private rateService: RateService, private categoryService: CategoryService, private sorter: Sorter, private dataFilter: DataFilterService,
              public trackby: TrackByService, private alertify: AlertifyService) { }


  sort(prop: string) {
    this.sorter.sort(this.rates, prop);
  }

  //#region get
  getPage() {

    this.rateService.get()
      .subscribe((response: Rate[]) => {


        const res = [];

        response.forEach((itm, i) => {
          res.push(Object.assign({}, itm, this.categories[i]));
        });
        this.rates = res;
        this.totalRecords = this.rates.length;
        this.editMode = true;
        this.alertify.success('Successfully Loaded');
      }, (err) => this.alertify.error(err));
  }
  // #endregion
  //#region get
  getCategories() {

    this.categoryService.get()
      .subscribe((response: Category[]) => {
        debugger
        this.categories = response;
      }, (err) => this.alertify.error(err));
  }
  // #endregion

  showadd() {
    this.editMode = true;
    this.rate = {};
  }


  // tslint:disable-next-line:no-shadowed-variable
  editshow(rate: Rate) {
    debugger;
    this.rate = rate;
    this.editMode = false;

  }
  //#endregion


  // #region add
  add(form?: NgForm): void {
    debugger
    const rateConcat = {
      id: this.rate.id,
      rateName: this.rate.rateName,
      categoryId: this.categoryId,
      rateTypeId: this.rateTypeId,
      ratePrice: this.rate.ratePrice,
      status: +this.rate.status
    } as Rate;
    this.rateService.add(rateConcat).subscribe(
      (data: Rate) => {
        this.getPage();
        this.alertify.success(data.rateName);
      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  // #endregion




  //#region edit
  edit(form?: NgForm) {

    this.rateService.edit(this.rate).subscribe(
      (data: Rate) => {
        this.alertify.success('Successfully update ' + data.rateName);

      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  //#endregion

  //#region delete
  delete(rate: Rate) {
    this.rateService.delete(rate).subscribe(
      () => {
        this.alertify.success(`Room with ID = ${rate.id} Deleted`);
        this.getPage();
      },
      (err) => {
        this.alertify.error(err);
      });
  }
  //#endregion

  ngOnInit() {
    this.getCategories();
    this.getPage();

  }

  //#region reset
  reset(form?: NgForm) {

    if (form != null) {
      form.reset();
    }
  }
  //#endregion

  selectChangeCategory(categoryId: any){
    debugger
    this.categoryId = +categoryId;

  }

  selectChangeType(rateTypeId: any){
    debugger
    this.rateTypeId = +rateTypeId;

  }
}
