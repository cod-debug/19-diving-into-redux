import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(10));
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleToggleShowCounter =  () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleShowCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
