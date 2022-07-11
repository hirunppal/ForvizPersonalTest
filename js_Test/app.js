const demoBooking = require('./demo-booking-data.json');

// console.log('hi');
// console.log(demoBooking);

const checkAvailability = (roomId, startTime, endTime) => {
  const targetRooms = demoBooking.filter((el) => {
    if (el.roomId === roomId) return el;

    // const Status=
  });
  // console.log(targetRooms);

  const Checklog = [];
  targetRooms.forEach((ele) => {
    const roomTimestart = new Date(ele.startTime).getTime();
    const roomTimeEnd = new Date(ele.endTime).getTime();
    const expectTimestart = new Date(startTime).getTime();
    const expectTimeEnd = new Date(endTime).getTime();

    if (roomTimeEnd <= expectTimestart || roomTimestart >= expectTimeEnd) {
      // return
    } else return Checklog.push(ele.title);
  });
  // console.log(new Date(targetRoom.startTime).getTime());
  // console.log(new Date(startTime).getTime());
  // console.log(new Date(targetRoom.startTime).getTime());
  // console.log(new Date(startTime).getTime());
  // console.log(Checklog);
  if (Checklog?.length < 1) {
    return (
      'The room is available if there’re no other current bookings during ' +
      startTime +
      ' - ' +
      endTime
    );
  } else {
    return { massage: 'room is Not available ', room_bookings: targetRooms };
  }
};
// return true / false;
const awns = checkAvailability(
  'A102',
  '2017-09-28 16:00:01',
  '2019-09-30 16:00:02'
);

// console.log(awns);
const getBookingsForWeek = (roomId, weekNo) => {
  return [];
};
