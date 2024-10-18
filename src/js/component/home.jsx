// add "useState" to the import statement
import React, {useState} from "react";


const Home = () => {
	// create a useState hook:

		 //variable  //setter function		//useState function call with initial value within the ()
	const [counter, setCounter] = useState(0);
	// Every time you call "setCounter" it will reassign the value


	const [text, setText] = useState("hello");
	const [like, setLike] = useState(true);

	// Set the "onClick" function to   '  onClick = {() => {}}          ''
			// call the function (  "setCounter()"  ) and put what the new value 
			//		SHOULD BE inside the ()
	return (
		<>
			<div className="CounterAndButton">
				<h1>{counter}</h1>
				<button onClick={() => {
					setCounter(counter + 1)
				}}>+1</button>

				<button onClick={() => {
					setCounter(counter - 1)
				}}>-1</button>
			</div>

			<div className="ChangeText">
				<h1>{text}</h1>
				<button onClick={() => {
					setText("Goodbye")
				}}>Change to Goodbye</button>
			</div>


			<div className="checkbox">
				<label>
					<input 
					type="checkbox"
					checked={like}
					onChange={(e) => {
						setLike(e.target.checked)
					}}
					/>
					I liked this
				</label>
				<p>You {like ? 'liked' : 'did not like'} this.</p>

			</div>
			

		</>

	);
};

export default Home;
