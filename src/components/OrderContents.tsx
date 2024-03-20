import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export const OrderContents = ({order, removeItem} : OrderContentsProps) => {
  return (
    <div>
        <div className="space-y-3">
            {order.map(item => (
                <div 
                    key={item.id}
                    className="flex justify-between items-center first-of-type:border-none border-t last-of-type:border-b border-sky-400"
                >
                    <div className="mt-5 last-of-type:mb-3">
                        <p className="text-lg text-blue-800 uppercase">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black text-green-600">Cantidad: {item.quantity} - <span className="text-blue-500">{ formatCurrency(item.price * item.quantity) }</span></p>
                    </div>

                    <button
                        className="bg-red-600 h-9 w-9 rounded-full text-white text-center text-xl"
                        onClick={() => removeItem(item.id)}
                    >
                        x
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
