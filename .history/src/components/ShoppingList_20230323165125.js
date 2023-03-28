import { plantList } from '../datas/plantList'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
            {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
			</ul>
		</div>
	)
}

export default ShoppingList