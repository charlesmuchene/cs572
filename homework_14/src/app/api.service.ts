import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private url = 'https://randomuser.me/api/?results=10';
	private dataKey = 'datakey';

	constructor(private http: HttpClient) {}

	getOnlineData() {
		this.http.get(this.url).subscribe((data: { results: [] }) => {
			localStorage.setItem(this.dataKey, JSON.stringify(data.results));
		});
	}

	getCachedData() {
		return JSON.parse(localStorage.getItem(this.dataKey));
	}
}
