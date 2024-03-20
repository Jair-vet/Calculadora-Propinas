import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export const OrderTotal = ({order, tip, placeOrder} : OrderTotalProps) => {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0) , [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(()  => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3 mt-6">
            <h2 className="text-3xl font-black md:text-left text-center text-indigo-900 ">Totales y Propina</h2>
            
            <p className="text-center md:text-left ">Subtotal a pagar:
                <span className="font-bold">{ formatCurrency(subTotalAmount) }</span>
            </p>
            <p className="text-center md:text-left ">Propina:
                <span className="font-bold">{ formatCurrency(tipAmount) }</span>
            </p>
            <p className="text-center md:text-left ">Total a pagar:
                <span className="font-bold">{ formatCurrency(totalAmount) }</span>
            </p>
        </div>

        <button 
            className="w-full rounded-md bg-sky-700 font-bold text-white mt-10 p-3 hover:bg-sky-600
                disabled:opacity-15 disabled:cursor-not-allowed"
            disabled={totalAmount === 0}
            onClick={() => placeOrder()}
        >
            Guardar Orden
        </button>
    </>
  )
}
