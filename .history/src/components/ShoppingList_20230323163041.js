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
            {/* {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))} */
            plantList.array.forEach(element => {
                
            });
            
        </ul>
    )
}

export default ShoppingList