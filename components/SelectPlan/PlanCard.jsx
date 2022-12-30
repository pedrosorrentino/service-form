import Image from 'next/image'
import { useState } from 'react'
import { useUserFormStore } from '../../stores/useUserStore'

const PlanCard = () => {
  const { userForm, addToSelectPlan, addToAddons } = useUserFormStore()
  const [activePlan, setActivePlan] = useState(userForm.selectPlan || {})
  const [selectedTime, setSelectedTime] = useState(
    userForm.selectPlan.time || 'month'
  )

  const handleClick = (name, price) => {
    addToAddons([])
    setActivePlan({ plan: name, price: price, time: selectedTime })
    addToSelectPlan('plan', name)
    addToSelectPlan('price', price)
    addToSelectPlan('time', selectedTime)
  }

  const handleChange = (e) => {
    setSelectedTime(e.target.value)
    addToSelectPlan('time', e.target.value)
  }

  const initialValues = [
    {
      packname: 'arcade',
      price: selectedTime === 'month' ? 9 : 100,
    },
    {
      packname: 'advanced',
      price: selectedTime === 'month' ? 12 : 120,
    },
    {
      packname: 'pro',
      price: selectedTime === 'month' ? 15 : 150,
    },
  ]

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
        {initialValues.map((item) => {
          return (
            <button
              key={item.packname}
              onClick={() => handleClick(item.packname, item.price)}
              className={`flex items-center gap-5 p-2 rounded-md border-grey-200 border cursor-pointer hover:bg-slate-100 hover:border-indigo-500 ${
                activePlan?.plan === item.packname
                  ? 'bg-slate-100 border-indigo-800'
                  : ''
              }`}
            >
              <Image
                src={`/assets/icon-${item.packname}.png`}
                width={64}
                height={64}
                alt={item.packname}
              />
              <div className='flex flex-col'>
                <h2 className='font-bold text-xl capitalize'>
                  {item.packname}
                </h2>
                <p className='font-medium text-slate-400'>
                  ${item.price}/{selectedTime}
                </p>
              </div>
            </button>
          )
        })}
      </div>
      <div className='flex items-center justify-center  bg-slate-100 p-2 rounded-md'>
        <div
          className={`px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out ${
            selectedTime === 'month' ? 'text-slate-800' : 'text-gray-400'
          }`}
        >
          Month
        </div>

        <input
          type='checkbox'
          id='switch'
          className='absolute opacity-0 w-0 h-0'
          onChange={handleChange}
          value={selectedTime === 'month' ? 'year' : 'month'}
        />
        <label
          htmlFor='switch'
          className='inline-flex items-center justify-center w-10 h-6 bg-slate-800 rounded-full cursor-pointer transition duration-150 ease-in-out'
        >
          <span
            className={`sr-only ${selectedTime === 'month' ? 'ml-3' : 'mr-3'}`}
          />
          <span
            className={` h-3 w-3 rounded-full bg-white shadow-solid ${
              selectedTime === 'year' ? 'ml-3' : 'mr-3'
            }`}
          />
        </label>

        <div
          className={`px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out ${
            selectedTime === 'year' ? 'text-slate-800' : 'text-gray-400'
          }`}
        >
          Year
        </div>
      </div>
    </>
  )
}

export default PlanCard
