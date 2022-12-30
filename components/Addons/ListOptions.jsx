import Image from 'next/image'
import { useState } from 'react'

import { useUserFormStore } from '../../stores/useUserStore'

const ListOptions = () => {
  const { userForm, addToAddons } = useUserFormStore()
  const [selectedPlan, setSelectedPlan] = useState([])

  const initialValue = [
    {
      id: 0,
      name: 'Online service',
      desc: 'Access to multiplayer games',
      price: userForm.selectPlan.time === 'month' ? 9 : 80,
      time: userForm.selectPlan.time === 'month' ? 'month' : 'year',
    },
    {
      id: 1,
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      price: userForm.selectPlan.time === 'month' ? 12 : 100,
      time: userForm.selectPlan.time === 'month' ? 'month' : 'year',
    },
    {
      id: 2,
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: userForm.selectPlan.time === 'month' ? 15 : 130,
      time: userForm.selectPlan.time === 'month' ? 'month' : 'year',
    },
  ]

  const handleClick = (id, name, price, time) => {
    const data = {
      id,
      name,
      price,
      time,
    }

    const index = userForm.addOns.findIndex((item) => item.id === id)
    if (index !== -1) {
      setSelectedPlan([])
      userForm.addOns.splice(index, 1)
    } else {
      setSelectedPlan([...selectedPlan, data])
      addToAddons([...selectedPlan, data])
    }
  }

  return (
    <ul className='grid gap-6 w-full'>
      {initialValue.map((item) => {
        const { id, name, price, desc } = item
        return (
          <li key={id}>
            <input type='checkbox' className='hidden peer' />
            <label
              value={price}
              onClick={() => {
                handleClick(id, name, price, userForm.selectPlan.time)
              }}
              className={`${
                userForm.addOns.some((option) => option.name === item.name)
                  ? 'bg-gray-100 border-indigo-800'
                  : 'bg-white'
              } flex gap-2 items-center p-3 text-slate-800 rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-gray-800 peer-checked:bg-slate-100 hover:bg-gray-50`}
            >
              <div>
                <Image
                  src={'/assets/icon-star.png'}
                  width={18}
                  height={18}
                  alt='Additional services'
                  className='mx-3'
                />
              </div>
              <div className='grow '>
                <div id='name' className='w-full md:text-lg font-semibold'>
                  {name}
                </div>
                <p className='w-full text-sm'>{desc}</p>
              </div>
              <div>
                {userForm.selectPlan.time === 'month' && `+$${price}/month`}
                {userForm.selectPlan.time === 'year' && `+$${price}/year`}
              </div>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default ListOptions
