import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Values{

	heading = 'Values';
	values = [];
	newValue;

	constructor(httpClient){
		httpClient.configure(config => {
      		config.useStandardConfiguration()
        		  .withBaseUrl('/api/values');
    	});

		this.http = httpClient;
	}

	activate(){
		return this.loadList();
	}

	loadList(){
		return this.http.fetch('')
      				.then(response => response.json())
      				.then(values => this.values = values);
	}

	submit(){
		if (!this.newValue) return;

		this.http.fetch('', {
				method: 'post',
				headers: {
					'Accept': 'application/json',
				    'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.newValue)
			}).then(response => this.loadList());
	}
}