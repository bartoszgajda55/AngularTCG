import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class ServerService {
  constructor(
    private http: Http
  ) {}

  storeServers(servers: any[]) {
    const header = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angulartcg.firebaseio.com/data.json', servers, header);
    return this.http.put('https://angulartcg.firebaseio.com/data.json', servers, header);
  }

  getServers() {
    return this.http.get('https://angulartcg.firebaseio.com/data')
      .map(
        (response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ).catch(
        (error) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getAppName() {
    return this.http.get('https://angulartcg.firebaseio.com/appName.json')
      .map(
        (response) => {
          return response.json();
        }
      );
  }
}
