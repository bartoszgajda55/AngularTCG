import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ServerService {
  constructor(
    private http: Http
  ) {}

  storeServers(servers: any[]) {
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angulartcg.firebaseio.com/data.json', servers, header);
  }
}
