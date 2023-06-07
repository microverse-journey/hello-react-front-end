import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetingSlice';

function Greeting() {
  const { greeting } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);
  return (
    <h1>{greeting}</h1>
  );
}

export default Greeting;
