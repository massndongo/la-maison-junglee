import { plantList } from '../datas/plantList';
// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

function ShoppingList() {
    return (
        <ul>
            {plantList.forEach(element => {
                
            });((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList