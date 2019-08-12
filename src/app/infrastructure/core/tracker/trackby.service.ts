import { Injectable } from '@angular/core';
import { Room } from '../../common/models/room';
import { Category } from '../../common/models/category';
import { Rate } from '../../common/models/rate';


@Injectable()
export class TrackByService {
  room(index: number, room: Room) {
    return room.id;
  }

  category(index: number, category: Category) {
    return category.id;
  }

  rate(index: number, rate: Rate) {
    return rate.id;
  }

}
