import React from "react"
import { FruitProvider, InputProvider, IndexProvider } from "./FruitContext"
import FruitList from "./FruitList"
import FruitForm from "./FruitForm"
import './Fruit.css'


const Fruit = () => {
	return (
		<FruitProvider>
			<IndexProvider>
				<FruitList />
				<InputProvider>
					<FruitForm />
				</InputProvider>
			</IndexProvider>
		</FruitProvider>
	)
}

export default Fruit;
