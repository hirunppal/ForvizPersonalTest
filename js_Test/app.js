const demoBooking = require('./demo-booking-data.json');

const checkAvailability = (roomId, startTime, endTime) => {
  const targetRooms = demoBooking.filter((el) => {
    if (el.roomId === roomId) return el;
  });
  // console.log(targetRooms);
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

const getBookingsForWeek = (roomId, weekNo) => {
  const today = '' + new Date();
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startDay = (obj) => '' + new Date(obj.startTime);

  const options = {
    1: (el) => {
      const todaytext = '' + new Date('2019-10-01 10:00:00');
      // console.log(today);
      // console.log(today.slice(0, 16));
      console.log(startDay(el).slice(0, 16));
      if (today.slice(0, 16) === startDay(el).slice(0, 16)) {
        return el;
      }
    },
    2: (elthisweek) => {
      console.log(startDay(elthisweek));
      if (today.getDay() < startDay(elthisweek).getDay() && true) {
      }
      return elthisweek;
      // const
    },
    // 3: next_week,
  };
  // const ArrofBookings = [];
  // for (let i = weekNo; i > 0; i--) {
  //   if (i > 3) console.log(i);
  // }

  const roomBookings = demoBooking.filter((el) => el.roomId === roomId);
  console.log(options[weekNo]);
  return weekNo
    ? roomBookings.filter(options[weekNo])
    : Object.values(options).map((e) => roomBookings.filter(e));
};

//test
console.log(getBookingsForWeek('A102', 1));
