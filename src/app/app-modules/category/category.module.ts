import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryRoutes } from './category.routing';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CategoryRoutes),
        FormsModule
    ],
    declarations: [
        CategoryComponent,
    ],
    providers: []
})
export class CategoryModule { }