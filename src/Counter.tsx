import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);

const increment = () => setCount(count() + 1);
const decrement = () => setCount(count() - 1);

function Counter() {
	return (
		<h3>
			Count: {count()}
			<button onClick={decrement} >-</button>
			<button onClick={increment}>+</button>
		</h3>
	);
}

export default Counter;