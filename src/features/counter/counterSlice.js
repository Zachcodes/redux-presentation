// createSlice is another helpful utility function that handles the tedious actions of creating 
// our reducer functions, actions and initializing the state
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  // although it looks to be violating one of Redux's 3 principles by manipulating the input state,
  // createSlice uses the library immer to wrap each function and pass a draft state. We can safely 
  // manipulate the input, and a copy of the state is safely returned behind the scenes
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// A reducer function signature is (state, action) => payload
// a typical reducer function not created by createSlice looks like
// function myReducer(state = initialState, action) {
//   switch(action.type) {
//     case 'MY_ACTION':
//       return {...state, number: state.number + 1}
//     default: 
//       return state;
//   }
// }

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
