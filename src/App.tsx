import { MenuItems } from "./components/MenuItems";
import { menuItems } from './data/db';
import useOrder from "./hooks/useOrder";


function App() {
  
  const { addItem } = useOrder()

  return (
    <>
      <header className="bg-sky-600 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Proinas y Consumos</h1>
      </header>

      <main className="max-w-7xl md:mx-auto py-20 mx-4 md:grid md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black text-center">Menú</h2>
          
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

        <div>
          <h2>Consumo</h2>
        </div>
      </main>

    </>
  )
}

export default App
