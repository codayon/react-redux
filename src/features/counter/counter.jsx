import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Redux Counter
        </h1>
        <div className="flex items-center justify-center space-x-6">
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            Decrement
          </button>
          <span className="text-5xl font-extrabold text-gray-900 w-24">
            {count}
          </span>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-md hover:bg-green-600 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}