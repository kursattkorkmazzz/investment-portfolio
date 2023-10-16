import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BudgetEditorComponent } from './pages/budget-editor/budget-editor.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BudgetTableComponent } from './components/budget-table/budget-table.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditModalComponent } from './components/modal/model-types/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BudgetEditorComponent,
    PageHeaderComponent,
    BudgetTableComponent,
    InputComponent,
    ModalComponent,
    EditModalComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
