import type { MenuItem } from "../types"


type MenuItemProps = {
    item: MenuItem
}

export const MenuItems = ({item} :  MenuItemProps) => {
  return (
    <button
        className="bg-sky-200 first-of-type:rounded-t-xl border-2 border-sky-200 w-full p-3 flex justify-between duration-150 
        hover:border-2 hover:border-white hover-rounded-md last-of-type:rounded-b-xl"
    >

        <p className="text-sky-900 text-lg uppercase">{item.name}</p>
        <p className="text-sky-900 font-black">${item.price}.00</p>
    </button>
  )
}

