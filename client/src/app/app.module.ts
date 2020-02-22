import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SalesUIComponent } from "./components/sales-ui/sales-ui.component";
import { AdminUIComponent } from "./components/admin-ui/admin-ui.component";
import { Globals } from "./globals";
import { ItemsDisplayComponent } from "./components/sales-ui/items-display/items-display.component";
import { RegisterComponent } from "./components/sales-ui/register/register.component";
import { MenuBtnsComponent } from "./components/sales-ui/menu-btns/menu-btns.component";
import { RegisterService } from "./services/register.service";
import { MatSortModule } from "@angular/material/sort";
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesUIComponent,
    AdminUIComponent,
    ItemsDisplayComponent,
    RegisterComponent,
    MenuBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    })
  ],
  providers: [RegisterService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
