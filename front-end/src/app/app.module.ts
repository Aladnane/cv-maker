import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


//Components
import { AppComponent } from './app.component';
import { LeftNavBarComponent } from './components/partials/left-nav-bar/left-nav-bar.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { TopNavBarComponent } from './components/partials/top-nav-bar/top-nav-bar.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { FullBlockComponent } from './components/partials/blockes/full-block/full-block.component';
import { DiscountPipe } from './pipes/discount/discount.pipe';
import { WithoutSpacesPipe } from './pipes/without-spaces/without-spaces.pipe';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { PageNotFoundComponent } from './components/pages/errors/page-not-found/page-not-found.component';
import { ConnectionComponent } from './components/pages/connection/layout/connection.component';
import { SignUpComponent } from './components/pages/connection/sign-up/sign-up.component';
import { LoginComponent } from './components/pages/connection/login/login.component';
import { InputComponent } from './components/partials/inputs/input/input.component';
import { ButtonComponent } from './components/partials/buttons/button/button.component';
import { CvListComponent } from './components/pages/cv/cv-list/cv-list.component';
import { CvMakerComponent } from './components/pages/cv/cv-maker/cv-maker.component';
import { CvFormComponent } from './components/partials/cv/cv-form/cv-form.component';
import { CvPreviewComponent } from './components/partials/cv/cv-preview/cv-preview.component';
import { TagComponent } from './components/partials/tags/tag/tag.component';
import { PhotoEditorComponent } from './components/partials/photo-editor/photo-editor.component';
import { PortfolioListComponent } from './components/pages/portfolio/portfolio-list/portfolio-list.component';
import { PortfolioMakerComponent } from './components/pages/portfolio/portfolio-maker/portfolio-maker.component';
import { ComboComponent } from './components/partials/combo/combo.component';
import { PortfolioTemplateComponent } from './components/pages/portfolio/portfolio-maker/portfolio-template/portfolio-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioTextEditorDialogComponent } from './components/partials/dialogs/portfolio/text-editor/portfolio-text-editor-dialog.component';
import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { InputEditableComponent } from './components/partials/inputs/input-editable/input-editable.component';
import { MatSliderModule } from '@angular/material/slider';

// import { MaterialUiModule } from './modules/material-ui/material-ui.module';
// import { PortfolioTextEditorDialogComponent } from './components/partials/dialogs/portfolio/text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    DiscoverComponent,
    TopNavBarComponent,
    TrendingComponent,
    FullBlockComponent,
    DiscountPipe,
    WithoutSpacesPipe,
    ProfilComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ConnectionComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    CvListComponent,
    CvMakerComponent,
    CvFormComponent,
    CvPreviewComponent,
    TagComponent,
    PhotoEditorComponent,
    PortfolioListComponent,
    PortfolioMakerComponent,
    ComboComponent,
    PortfolioTemplateComponent,
    PortfolioTextEditorDialogComponent,
    InputEditableComponent,
  ],
  entryComponents: [PortfolioTextEditorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    MatSliderModule
  ],
  providers: [
    WithoutSpacesPipe,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
