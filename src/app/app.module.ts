import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { ListBucketsComponent } from './pages/list-buckets/list-buckets.component';
import { MatTableModule } from '@angular/material/table';
import { CreateBucketComponent } from './pages/create-bucket/create-bucket.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadobjectComponent } from './pages/uploadobject/uploadobject.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {InterceptorService} from '../app/services/shared/interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListBucketsComponent,
    CreateBucketComponent,
    UploadobjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMatFileInputModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: MatFormFieldControl, useExisting: CreateBucketComponent },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi:true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
