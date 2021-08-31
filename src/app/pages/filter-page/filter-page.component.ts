import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

// We use the gql tag to parse our query string into a query document
const GET_POSTS = gql`
query {
	Country {
    name
    # check the docs for more info
  }
}

`;

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {

  loading: boolean = true;
  countries: any;

  private querySubscription: Subscription = new Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_POSTS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.countries = data.Countries;
      });
      console.log(this.countries);
      this.test();
  }

  test() {
    
    let url = 'http://localhost:7474/db/neo4j/tx';
    let username = 'neo4j';
    let password = 'graphRoot';
    let headers = new Headers();
    let query = `
    query {
      Country {
        name
        # check the docs for more info
      }
    }
    `;
    // let base64 = require('base-64');


    //headers.append('Content-Type', 'text/json');
    // headers.append('Authorization', 'Basic ' + username + ":" + password);
    // headers.append('query', 'query { Country {name} }');
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    fetch(url, {method:'POST',
            headers: headers,
            //credentials: 'user:passwd'
          body: JSON.stringify({
            query: 'query { Country {name} }'
          }),
          })
    .then(response => response.json())
    .then(json => console.log(json));
  }



  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
