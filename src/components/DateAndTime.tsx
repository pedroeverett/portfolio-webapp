// import { observer } from 'mobx-react';
// import React from 'react';
// import { DateAndTimeState } from './DateAndTimeState';

// @observer
// export class DateAndTime extends React.Component {
//   private readonly dateAndTimeSate = new DateAndTimeState();
//   private intervalID: NodeJS.Timeout;

//   public componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   }

//   public componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   public render() {
//     return <p>{this.dateAndTimeSate.date}.</p>;
//   }

//   private tick() {
//     this.dateAndTimeSate.setDate(new Date().toLocaleString());
//   }

//   // future idea to render date and time separate without using Date().toLocaleString()
//   // probably do this in state

//   //   private renderTime() {
//   //     const date = new Date();
//   //     const h = date.getHours(); // 0 - 23
//   //     const m = date.getMinutes(); // 0 - 59
//   //     const s = date.getSeconds();
//   //     const dayOfMonth = date.getDate(); //day of the month
//   //     const month = date.getMonth();
//   //     const year = date.getFullYear();

//   //     // h = h < 10 ? '0' + h : h;
//   //     // m = m < 10 ? '0' + m : m;
//   //     // s = s < 10 ? '0' + s : s;

//   //     const fullDate = h + ':' + m + ':' + s + '  ' + dayOfMonth + '/' + month + '/' + year;
//   //     return <div>{fullDate}</div>;
//   //   }
// }
