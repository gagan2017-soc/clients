import { NgModule } from  '@angular/core';
import {MatNativeDateModule} from  '@angular/material/core';
import {MatIconModule} from  '@angular/material/icon';
import {MatDialogModule} from  '@angular/material/dialog';
import {MatSnackBarModule} from  '@angular/material/snack-bar';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

import {MatButtonModule} from  '@angular/material/button';
import {MatTableModule} from  '@angular/material/table';
import {MatPaginatorModule} from  '@angular/material/paginator';
import {MatSortModule} from  '@angular/material/sort';

import {MatTabsModule} from  '@angular/material/tabs';
import {MatCheckboxModule} from  '@angular/material/checkbox';

import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatCard, MatCardModule} from  '@angular/material/card';
import {MatFormField, MatFormFieldModule} from  '@angular/material/form-field';
import {MatProgressSpinnerModule} from  '@angular/material/progress-spinner';
import {MatInputModule} from  '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
//import {MatTableDataSource} from '@angular/material/table';



@NgModule({
imports: [MatTabsModule,CommonModule,MatSidenavModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, MatMenuModule, MatListModule],
exports: [MatTabsModule,CommonModule,MatSidenavModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule,MatTableModule,MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, MatMenuModule, MatListModule],

})

export  class  MaterialModule { }