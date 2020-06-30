import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MaterialModule} from './material.module';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { MainCardComponent } from './main-card/main-card.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainCasrouelComponent } from './main-casrouel/main-casrouel.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainAboutComponent } from './main-about/main-about.component';
import { MainCardGroupComponent } from './main-card-group/main-card-group.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageGenGuideComponent } from './page-gen-guide/page-gen-guide.component';
import { PageFaqComponent } from './page-faq/page-faq.component';


import { PageManPaymentComponent } from './page-man-payment/page-man-payment.component';
import {PageFesCalComponent} from './page-fes-cal/page-fes-cal.component';
import { PageRentHouseComponent } from './page-rent-house/page-rent-house.component';
import { PageAmentiesComponent } from './page-amenties/page-amenties.component';
import { PageNewsComponent } from './page-news/page-news.component';
import { PageGanGalleryComponent } from './page-gan-gallery/page-gan-gallery.component';
import { PageOtherGalleryComponent } from './page-other-gallery/page-other-gallery.component';
import { PageManCommComponent } from './page-man-comm/page-man-comm.component';
import { PageSuppStaffComponent } from './page-supp-staff/page-supp-staff.component';

import { ErrorComponent } from './error/error.component';
import {FormsModule} from "@angular/forms"; 

import { HttpModule } from '@angular/http';
import { PageRegisterComponent } from './page-register/page-register.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageMemberDisplayComponent } from './page-member-display/page-member-display.component';
import { PageAdminDisplayComponent } from './page-admin-display/page-admin-display.component';
import { PageLoginComponent } from './page-login/page-login.component';
import {UserService}  from './service/user.service';
import {TranscationService} from './service/transcation.service';
import { InterceptorService } from './service/interceptor.service';
import { PageAdminDashComponent } from './page-admin-dash/page-admin-dash.component';
import { PageAdminMemberComponent } from './page-admin-member/page-admin-member.component';
import { PageTransEntryComponent } from './page-trans-entry/page-trans-entry.component';
import { PageAdminMainviewComponent } from './page-admin-mainview/page-admin-mainview.component';
import { PageMemberDashboardComponent } from './page-member-dashboard/page-member-dashboard.component';
import { PageMemberProfileComponent } from './page-member-profile/page-member-profile.component';
import { PageMemberViewtransComponent } from './page-member-viewtrans/page-member-viewtrans.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
//import {MatExpansionModule} from '@angular/material/expansion';

const  appRoutes:  Routes  = [
   { path:  'home-page', component:  PageHomeComponent },
  { path:  'casroule-rou', component:  MainCasrouelComponent },
  { path:  'card-list', component:  MainAboutComponent },
  { path:  'gen-guide-page', component:  PageGenGuideComponent },
  { path:  'faq-page', component:  PageFaqComponent },
  { path:  'man-pay-page', component:  PageManPaymentComponent },
  { path:  'fes-cal-page', component:  PageFesCalComponent },
  { path:  'ren-house-page', component:  PageRentHouseComponent },
  { path:  'amenties-page', component:  PageAmentiesComponent },
  { path:  'news-page', component:  PageNewsComponent },
  { path:  'gan-gallery-page', component:  PageGanGalleryComponent },
  { path:  'oth-gallery-page', component:  PageOtherGalleryComponent },
  { path:  'man-committe-page', component:  PageManCommComponent },
  { path:  'supp-staff-page', component:  PageSuppStaffComponent },
  { path:  'register-page', component:  PageRegisterComponent },
  { path:  'login-page', component:  PageLoginComponent },
  { path:  'admin-page', component:  PageAdminDisplayComponent,
  children: [
    
      { path: 'contact', component:PageFaqComponent
    
     /*  path: 'profile',
      loadChildren: './page-admin-display/page-admin-display.component#profile' */
    }]
   },
  { path:  'member-page', component:  PageMemberDisplayComponent},
  
//  { path:  'home', component:  AppComponent},
  { path:  '', redirectTo:  '/home-page', pathMatch:  'full'  },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainToolbarComponent,
    MainCardComponent,
    MainCasrouelComponent,
    MainAboutComponent,
    MainCardGroupComponent,
    MainFooterComponent,
    PageHomeComponent,
    PageGenGuideComponent,
    PageFaqComponent,
    PageManPaymentComponent,
    PageFesCalComponent,
    PageRentHouseComponent,
    PageAmentiesComponent,
    PageNewsComponent,
    PageGanGalleryComponent,
    PageOtherGalleryComponent,
    PageManCommComponent,
    PageSuppStaffComponent,
    
    ErrorComponent,
    
    PageRegisterComponent,
    
    PageMemberDisplayComponent,
    
    PageAdminDisplayComponent,
    
    PageLoginComponent,
    
    PageAdminDashComponent,
    
    PageAdminMemberComponent,
    
    PageTransEntryComponent,
    
    PageAdminMainviewComponent,
    
    PageMemberDashboardComponent,
    
    PageMemberProfileComponent,
    
    PageMemberViewtransComponent
    
  // MatExpansionModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    BsDropdownModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RouterModule.forRoot(
      appRoutes,
    )    
        
  ],
  providers: [UserService,TranscationService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
