import { useUserFormStore } from '../../stores/useUserStore'

const SummaryCard = () => {
  const { userForm, changePlanStepNumber } = useUserFormStore()

  const sumTotaladdOns = userForm.addOns.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  )
  const totalPriceResume = sumTotaladdOns + userForm.selectPlan.price

  let stringDate
  if (userForm.selectPlan.time === 'month') {
    stringDate = {
      long: 'Monthly',
      short: 'mo',
    }
  } else {
    stringDate = {
      long: 'Yearly',
      short: 'ye',
    }
  }

  const onClickChangeBtn = () => {
    changePlanStepNumber(1)
  }

  return (
    <>
      <div className=' bg-gray-100 border border-gray-200 rounded-lg p-5'>
        <div className='flex justify-between items-center '>
          <div className='capitalize font-semibold text-lg'>
            {userForm.selectPlan.plan} ({stringDate.long})
            <p
              className='font-normal text-sm cursor-pointer hover:text-[#483EFF]'
              onClick={onClickChangeBtn}
            >
              Change
            </p>
          </div>
          <div className='font-semibold'>
            ${userForm.selectPlan.price}/{stringDate.short}
          </div>
        </div>
        <hr className='my-4 h-px bg-gray-300 border-0'></hr>

        {userForm.addOns.map((item) => (
          <div
            key={item.name}
            className='flex justify-between items-center my-2'
          >
            <div className='capitalize text-gray-500'>{item.name}</div>
            <div className='font-semibold'>
              +${item.price}/{stringDate.short}
            </div>
          </div>
        ))}
      </div>
      <div className='m-3'>
        <div className='flex justify-between items-center '>
          <div className='capitalize font-semibold text-lg'>
            Total ({stringDate.long})
          </div>
          <div className='font-semibold text-xl text-[#483EFF]'>
            +${totalPriceResume}/{stringDate.short}
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryCard
