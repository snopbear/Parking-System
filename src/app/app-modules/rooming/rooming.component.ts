import { RoomService } from './../../infrastructure/common/service/room/room.service';
import { DataFilterService } from './../../infrastructure/core/data-filter/data-filter.service';
import { Component, OnInit } from '@angular/core';
import { Sorter } from 'src/app/infrastructure/core/sorter/sorter';
import { Room } from 'src/app/infrastructure/common/models/room';
import { TrackByService } from 'src/app/infrastructure/core/tracker/trackby.service';
import { AlertifyService } from 'src/app/infrastructure/core/alertify-configurations/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooming',
  templateUrl: './rooming.component.html',
  styleUrls: ['./rooming.component.css']
})
export class RoomingComponent implements OnInit {

  room: Room = new Room();

  rooms: Room[];

  totalRecords = 0;

  editMode = true;

  constructor(private roomService: RoomService, private sorter: Sorter, private dataFilter: DataFilterService,
              public trackby: TrackByService, private alertify: AlertifyService) { }


  sort(prop: string) {
    this.sorter.sort(this.rooms, prop);
  }
  //#region get
  getPage() {
    this.roomService.get()
      .subscribe((response: Room[]) => {
        this.rooms = response;
        this.totalRecords = this.rooms.length;
        this.editMode = true;
        this.alertify.success('Successfully Loaded');
      }, (err) => this.alertify.error(err));
  }
  // #endregion


  showadd() {
    this.editMode = true;
    this.room = {};
  }


  // tslint:disable-next-line:no-shadowed-variable
  editshow(room: Room) {
    this.room = room;
    this.editMode = false;

  }
  //#endregion


  // #region add
  add(form?: NgForm): void {
    this.roomService.add(this.room).subscribe(
      (data: Room) => {
        this.getPage();
        this.alertify.success(data.key)
      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  // #endregion




  //#region edit
  edit(form?: NgForm) {

    this.roomService.edit(this.room).subscribe(
      (data: Room) => {
        this.alertify.success('Successfully update ' + data.key);

      },
      (err) => this.alertify.error(err),
      () => this.reset(form));
  }
  //#endregion

    //#region delete
    delete(room: Room) {
      this.roomService.delete(room).subscribe(
        () => {
          this.alertify.success(`Room with ID = ${room.id} Deleted`);
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
