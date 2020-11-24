import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {PhotoListModule} from './photo-list/photo-list.module';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoModule} from './photo/photo.module';

@NgModule({
    declarations: [

    ],
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {}
