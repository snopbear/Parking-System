import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

export const CategoryRoutes: Routes = [
  {
      path: '',
      children: [
        {
          path: 'category',
          component: CategoryComponent
      }
      ]
  }
];


