import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private route: ActivatedRoute, private serversService: ServersService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        console.log('param changed', params.id);
        this.server = this.serversService.getServer(Number(params.id));
        console.log('thisserver', this.server);
      }
    );
  }

}
