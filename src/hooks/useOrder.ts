import { useState } from "react"
import type { MenuItem, OrderItem } from '../types';


export default function useOrder() {    
    const [order, setOrder] = useState<OrderItem[]>([])

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
    
    

    return {
        addItem,
        order
    }
}