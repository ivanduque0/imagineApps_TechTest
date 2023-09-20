import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
    exports: [    
      MatButtonModule,
      MatButtonToggleModule,
      MatDialogModule,
      MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatIconModule,
      // MatTableModule,
      // MatPaginatorModule,
      // MatProgressSpinnerModule,
      MatCardModule,
      MatToolbarModule,
      // MatSelectModule,
      // MatTabsModule,
      // MatSlideToggleModule,
      // MatExpansionModule
      MatMenuModule

    ]
  })
  export class MaterialModule { }
  