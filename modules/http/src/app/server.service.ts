import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { map } from "rxjs/operators"

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('https://angularcourse-466aa.firebaseio.com/data.json', servers, { headers });
  }

  getServers() {
    return this.http.get('https://angularcourse-466aa.firebaseio.com/data.json')
      .pipe(
        map((response: Response) => response.json())
      );
  }
}
