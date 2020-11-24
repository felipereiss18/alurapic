import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescription} from './filter-by-description.pipe';
import {CommonModule} from '@angular/common';
import {PhotosComponent} from './photos/photos.component';
import {PhotoModule} from '../photo/photo.module';
import {CardModule} from '../../shared/card.module';
import {SearchComponent} from './search/search.component';
import {DarkenOnHoverModule} from '../../shared/directives/darker-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule {

}
