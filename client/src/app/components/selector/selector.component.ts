import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  move(int: number) {
    this.commonService.changeMonth(int)
  }

}
