import { useState } from "react"
import type { MenuItem, OrderItem } from '../types';


export default function useOrder() {    
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuItem) => {

        const itemExist = order.find(OrderItem => OrderItem.id === item.id)  //encontrar el elemento
        if(itemExist) {
            // identifica el elemento repetido
            // Toma lo que tenemos en cantidad y aumenta 1 mas
            const updatedOrder = order.map( orderItem => orderItem.id === item.id
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }
    

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id))
        
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    

    return {
        addItem,
        order,
        removeItem,
        placeOrder,
        setTip,
        tip
    }
}