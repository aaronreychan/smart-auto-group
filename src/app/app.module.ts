import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookieModule} from 'ngx-cookie';
import {HttpModule} from '@angular/http';

import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {NavigationComponent} from './shared/components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
import {BudgetComponent} from './components/budget/budget.component';
import {EmailComponent} from './components/email/email.component';
import {AboutComponent} from './components/about/about.component';
import {BudgetEstimatorComponent} from './components/budget-estimator/budget-estimator.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {FaqsComponent} from './components/faqs/faqs.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {MyCookieService} from './services/cookieService';
import {TeamComponent} from './components/team/team.component';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PhoneMaskDirective} from './directive/phone-mask.directive';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'budget-estimator', component: BudgetEstimatorComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'team', component: TeamComponent},
    {path: 'faqs', component: FaqsComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'budget', component: BudgetComponent},
    {path: 'email', component: EmailComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        BudgetComponent,
        EmailComponent,
        AboutComponent,
        BudgetEstimatorComponent,
        InventoryComponent,
        FaqsComponent,
        ReviewsComponent,
        TeamComponent,
        PhoneMaskDirective
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        IonRangeSliderModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        CookieModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        MyCookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
