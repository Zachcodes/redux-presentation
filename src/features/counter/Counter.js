import React, { useState } from 'react';
// useSelector and useDispatch are hooks that allow us to access the current state of the store and dispatch action respectively
import { useSelector, useDispatch } from 'react-redux';
// these are our action creators 
// each function will dispatch an action with the prefix of name and correspond with the reducer function
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // useSelector is rerun whenever the global state changes
  // the component only rerenders if the selected state differs from the last render
  const count = useSelector(selectCount);
  console.log("current valud of state", count)
  // we can also define our selector inline
  // const count = useSelector(state => {
  //   return {
  //      count: state.counter.value
  //   }
  // })

  // useDispatch is stable and guarantees the returned dispatch is the same between renders
  // we use it to dispatch our actions to be handled by the reducer
  const dispatch = useDispatch();

  // redux should only contain global state (state that multiple components need to know about)
  // localized state or state that only matters to this component should be handled in the local component
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
