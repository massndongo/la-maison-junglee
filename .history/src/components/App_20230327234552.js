import { plantList } from '../datas/plantList'
import Banner from './Banner'
import CareScale from './CareScale'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
    return <div><Banner /><Cart /><ShoppingList /><CareScale scaleValue={plantList.light} /></div>
}

export default App