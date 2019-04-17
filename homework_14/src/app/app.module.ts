import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(private apiService: ApiService) {
		apiService.getOnlineData();
	}
}
