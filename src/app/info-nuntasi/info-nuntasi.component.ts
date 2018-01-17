import { Component, OnInit } from '@angular/core';
import { NuntasiService } from '../services/nuntasi.service';

@Component({
  selector: 'info-nuntasi',
  templateUrl: './info-nuntasi.component.html',
  styleUrls: ['./info-nuntasi.component.css']
})
export class InfoNuntasiComponent implements OnInit {
  totalConfirmat = 0;
  totalInvitati = 0;
  constructor(public nuntasi: NuntasiService) {
  }

  ngOnInit() {
    this.subscribeTotaluri();
  }

  subscribeTotaluri() {
    this.nuntasi.queryNuntasi('confirmat', true).subscribe(items => {
      this.totalConfirmat = items.length;
    });
    this.nuntasi.queryNuntasi('invitat', true).subscribe(items => {
      this.totalInvitati = items.length;
    });
  }

}
