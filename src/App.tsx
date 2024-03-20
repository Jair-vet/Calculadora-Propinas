import { MenuItems } from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import { menuItems } from './data/db';
import useOrder from "./hooks/useOrder";


function App() {
  
  const { addItem, order, removeItem } = useOrder()

  return (
    <>
      <header className="bg-sky-600 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Proinas y Consumos</h1>
      </header>

      <main className="max-w-7xl md:mx-auto py-20 mx-4 md:grid md:grid-cols-2 gap-10">
        {/* Menu Items */}
        <div>
          <h2 className="text-3xl font-black text-center text-indigo-900">Menú</h2>
          
          <div className="mt-10">
            { menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        
        {/* Order Content */}
        <div className="md:mt-0 mt-10">
          <h2 className="text-3xl font-black text-center text-indigo-900 ">Consumo</h2>
          <OrderContents 
            order={order}
            removeItem={removeItem}
          />

        </div>
      </main>

    </>
  )
}

export default App
