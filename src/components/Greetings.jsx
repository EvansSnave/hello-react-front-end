import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greeting/greetingSlice';

const Greetings = () => {
  const greeting = useSelector((state) => state.randomGreeting.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greetings;
