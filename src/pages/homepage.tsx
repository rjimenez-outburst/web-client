import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitStore } from '@store/defaultStore';
import { increment, decrement } from '@store/actions';

export function Homepage() {
  const { count } = useSelector((store: InitStore) => store);
  const dispatch = useDispatch();

  const down = () => {
    dispatch(decrement());
  };

  const up = () => {
    dispatch(increment());
  };

  return (
    <div>
      Counter: {count}
      <br />
      <button type="button" onClick={down}>
        -
      </button>
      <button type="button" onClick={up}>
        +
      </button>
    </div>
  );
}
