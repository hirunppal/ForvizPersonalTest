import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import BookingLayout from './Pages/BookingLayout';
import DynamicBookingLists from './Component/DynamicBookingLists';

function App() {
  return (
    <div className='App'>
      <div className=' relative '>
        <div className='w-full h-screen absolute top-0 flex justify-center items-center first-letter rectangle '>
          <Routes>
            <Route path='/booking' element={<BookingLayout />}>
              <Route path='thisweek' element={<DynamicBookingLists />} />
              <Route path='nextweek' element={<DynamicBookingLists />} />
              <Route path='wholemonth' element={<DynamicBookingLists />} />
              <Route
                path='*'
                element={<Navigate to='thisweek?roomId=A101'></Navigate>}
              />
            </Route>
            <Route path='*' element={<Navigate to='/booking'></Navigate>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
