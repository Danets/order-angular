import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';
import {CommonService}  from '../../../shared/common.service';

interface Day {
  value: moment.Moment,
  active: boolean,
  disabled: boolean,
  selected: boolean
}
interface Week {
  days: Day[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[]

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.date.subscribe(this.createCalendar.bind(this))
  }

  createCalendar(today: moment.Moment) {
    // There are borders for month!!! first day must to begin from month and week !!!
    const firstDay = today.clone().startOf('month').startOf('week')
    const lastDay = today.clone().endOf('month').endOf('week')

    // Iterate object
    const date = firstDay.clone().subtract(1, 'day')

    const newCalendar = []

    while(date.isBefore(lastDay, 'day')) {
      newCalendar.push({
        days: Array(7).fill(0).map(() => {
          const value = date.add(1, 'day').clone()

          // Current date, we are asking for moment about it!
          const active = moment().isSame(value, 'date')

          // Current month
          const disabled = !today.isSame(value, 'month')

          const selected = today.isSame(value, 'date')

          return {
            value, active, disabled, selected
          }
        })
      })
    }

    // It is important for optimization - render will be only one time!!!
    this.calendar = newCalendar
    
  }

  select(day: moment.Moment) {
    this.commonService.changeDate(day)
  }

}
