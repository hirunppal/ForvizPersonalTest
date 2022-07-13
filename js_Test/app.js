const { faIgloo } = require('@fortawesome/free-solid-svg-icons');
const demoBooking = require('./demo-booking-data.json');

const checkAvailability = (roomId, startTime, endTime) => {
  const targetRooms = demoBooking.filter((el) => {
    if (el.roomId === roomId) return el;
  });
  const Checklog = [];
  targetRooms.forEach((ele) => {
    const roomTimestart = new Date(ele.startTime).getTime();
    const roomTimeEnd = new Date(ele.endTime).getTime();
    const expectTimestart = new Date(startTime).getTime();
    const expectTimeEnd = new Date(endTime).getTime();
    if (roomTimeEnd <= expectTimestart || roomTimestart >= expectTimeEnd) {
    } else return Checklog.push(ele.title);
  });
  // console.log(new Date(targetRoom.startTime).getTime());
  // console.log(new Date(startTime).getTime());
  // console.log(new Date(targetRoom.startTime).getTime());
  // console.log(new Date(startTime).getTime());
  // console.log(Checklog);
  if (Checklog?.length < 1) {
    return {
      status: true,
      massage:
        'The room is available if there’re no other current bookings during ' +
        startTime +
        ' - ' +
        endTime,
    };
  } else {
    return {
      status: false,
      massage: 'room is Not available ',
      room_bookings: targetRooms,
    };
  }
};

// test return true / false;
const awns = checkAvailability(
  'A102',
  '2017-09-28 16:00:01',
  '2019-09-30 16:00:02'
);
// console.log(awns);
//
//
///
///
//
const getBookingsForWeek = (roomId, weekNo) => {
  // const today = new Date();
  const today = new Date('2019-09-30 09:00:00');
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startDay = (obj) => new Date(obj.startTime);

  const GetfirstdateOftheWeek = (fulldate) =>
    new Date(fulldate.setDate(fulldate.getDate() - fulldate.getDay()));
  // const GetfirstdateOfnextWeek = (fulldate) =>
  // new Date(
  //   fulldate.setDate(fulldate.getDate() - fulldate.getDay())
  // ).getTime();
  const mstoday = 1000 * 60 * 60 * 24;
  const optionsWeekno = {
    1: (el) => {
      if (('' + today).slice(0, 16) === (startDay(el) + '').slice(0, 16)) {
        return el;
      }
    },
    //fuction for get this week Books

    2: (elthisweek) => {
      const firstdate = GetfirstdateOftheWeek(today).getTime() / mstoday;
      const lastdate =
        new Date(
          GetfirstdateOftheWeek(today).setDate(
            GetfirstdateOftheWeek(today).getDate() + 6
          )
        ) / mstoday;

      console.log('Math.floor(firstdate)');
      console.log(startDay(elthisweek).getTime() / mstoday);
      console.log(Math.floor(firstdate));
      // console.log(REALnextweekToday.getTime() / mstoday);
      console.log(Math.ceil(lastdate));

      if (
        Math.floor(firstdate) <= startDay(elthisweek).getTime() / mstoday &&
        startDay(elthisweek).getTime() / mstoday <= Math.ceil(lastdate)
      ) {
        return elthisweek;
      }
      // const
    },
    3: (searchextWeek) => {
      // console.log(searchextWeek);
      // .getTime() / mstoday
      const todayToNextWeek = new Date(today.getTime());
      const REALnextweekToday = new Date(
        todayToNextWeek.setDate(todayToNextWeek.getDate() + 7)
      );

      const nextweekToday = startDay(searchextWeek);
      const nextweekdate = new Date(nextweekToday.getTime());
      const NextWeekstartDay = new Date(
        nextweekdate.setDate(nextweekdate.getDate())
      );
      // .getDate();
      const date = new Date(GetfirstdateOftheWeek(NextWeekstartDay).getTime());
      const firstdatee =
        new Date(
          date.setDate(GetfirstdateOftheWeek(NextWeekstartDay).getDate())
        ).getTime() / mstoday;

      lastDateOfnextWeek =
        new Date(
          NextWeekstartDay.setDate(NextWeekstartDay.getDate() + 6)
        ).getTime() / mstoday;

      // console.log(searchextWeek);
      // console.log(Math.floor(firstdatee));
      // console.log(REALnextweekToday.getTime() / mstoday);
      // console.log(Math.ceil(lastDateOfnextWeek));
      if (
        Math.floor(firstdatee) <= REALnextweekToday.getTime() / mstoday &&
        REALnextweekToday.getTime() / mstoday <= Math.ceil(lastDateOfnextWeek)
      ) {
        return searchextWeek;
      }
    },
  };

  const thisRoomBookings = demoBooking.filter((el) => el.roomId === roomId);

  // console.log(Object.values(optionsWeekno).map((e) => e));

  if (weekNo) {
    const getBookingsForWeek = thisRoomBookings.filter(optionsWeekno[weekNo]);
    if (getBookingsForWeek?.length > 0) {
      return getBookingsForWeek;
    } else return 'none';
  } else {
    return Object.values(optionsWeekno).map((e, idx) => {
      // console.log(thisRoomBookings.filter(e));
      return {
        For:
          idx === 0
            ? 'today'
            : idx === 1
            ? 'this week'
            : idx === 2
            ? 'next week'
            : '',
        BookingList: thisRoomBookings.filter(e),
      };
    });
  }
};

//test

console.log('BookingForTheRooom');
console.log(JSON.stringify(getBookingsForWeek('A102')));
//
