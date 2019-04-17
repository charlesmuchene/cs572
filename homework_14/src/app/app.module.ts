import { DataService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, HttpClientModule, appRoutes ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(private apiService: DataService) {
		apiService.getOnlineData();
	}
}
