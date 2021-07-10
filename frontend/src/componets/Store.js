export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });
export const increaseOrder = () => ({ type: 'INCREASEORDER' });
export const decreaseOrder = () => ({ type: 'DECREASEORDER' });
export const reset = () => ({ type: 'RESET' });

const initstate = {
  number: 0,
  orderNum: 0,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, orderNum: state.orderNum + 0 };

    case 'DECREMENT':
      if ({ number: state.number < 0 }) {
        return { number: (state.number = 0), orderNum: state.orderNum + 0 };
      }
      return { number: state.number - 1, orderNum: state.orderNum + 0 };

    case 'RESET':
      return { number: (state.number = 0), orderNum: state.orderNum + 1 };

    case 'INCREASEORDER':
      return { orderNum: state.orderNum + 1, number: state.number + 0 };

    case 'DECREASEORDER':
      if ({ orderNum: state.orderNum < 0 }) {
        return { orderNum: (state.orderNum = 0), number: state.number + 0 };
      }
      return { orderNum: state.orderNum - 1, number: state.number + 0 };

    default:
      return state;
  }
};

export default reducer;
