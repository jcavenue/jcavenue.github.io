import { useState } from "react"

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const dec = (c) => {
		if(c === 0) return 0;
		return c - 1;
	}

	const increment = () => {setCounter(counter + 1)};
	const decrement = () => {setCounter(dec,c => console.log(c))};
	const reset = () => {setCounter(0)};

	return (
		<div>
			<p>{counter}</p>
			<section>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</section>
		</div>
	);
}

	export default Counter;