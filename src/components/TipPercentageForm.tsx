import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export const TipPercentageForm = ({setTip, tip} : TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="text-3xl font-black md:text-left text-center text-indigo-900 mt-5">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex md:justify-start justify-center mt-4 gap-2 text-xl text-sky-600">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                      id={tipOption.id}
                      type="radio"
                      name="tip"
                      className="text-sky-500 bg-sky-100"
                      value={tipOption.value}
                      onChange={ e => setTip(+e.target.value)}
                      checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
