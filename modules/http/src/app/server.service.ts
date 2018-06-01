import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { map, catchError } from "rxjs/operators"
import { throwError } from "rxjs";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put('https://angularcourse-466aa.firebaseio.com/data.json', servers, { headers });
  }

  getServers() {
    return this.http.get('https://angularcourse-466aa.firebaseio.com/data')
      .pipe(
        map((response: Response) => response.json()),
        catchError((error: Response) => {
          console.log('catch', error);

          return throwError('Something went wrong');
        })
      );
  }

  getAppName() {
    return this.http.get('https://angularcourse-466aa.firebaseio.com/data/appName.json')
      .pipe(
        map((response: Response) => response.json())
      );
  }
}
