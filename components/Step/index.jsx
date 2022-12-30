import { useUserFormStore } from '../../stores/useUserStore'

const Step = () => {
  const { stepNumber } = useUserFormStore()

  return (
    <>
      <div className='h-40 bg-image flex md:flex-col md:p-8 md:m-5 items-center justify-center md:justify-start md:items-start'>
        <div className='flex md:m-4 items-center'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 0 && 'bg-zinc-200 text-black'
            }`}
          >
            1
          </div>
          <div className='ml-4'>
            <h2 className='hidden md:block text-sm text-gray-400 uppercase'>
              Step 1
            </h2>
            <p className='hidden md:block font-semibold text-white uppercase'>
              Your info
            </p>
          </div>
        </div>
        <div className='flex md:m-4 items-center'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 1 && 'bg-zinc-200 text-black'
            }`}
          >
            2
          </div>
          <div className='ml-4'>
            <h2 className='hidden md:block text-sm text-gray-400 uppercase'>
              Step 2
            </h2>
            <p className='hidden md:block font-semibold text-white uppercase'>
              Select Plan
            </p>
          </div>
        </div>
        <div className='flex md:m-4 items-center'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 2 && 'bg-zinc-200 text-black'
            }`}
          >
            3
          </div>
          <div className='ml-4'>
            <h2 className='hidden md:block text-sm text-gray-400 uppercase'>
              Step 3
            </h2>
            <p className='hidden md:block font-semibold text-white uppercase'>
              Add-ons
            </p>
          </div>
        </div>
        <div className='flex md:m-4 items-center'>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 text-white font-semibold ${
              stepNumber === 3 && 'bg-zinc-200 text-black'
            }`}
          >
            4
          </div>
          <div className='ml-4'>
            <h2 className='hidden md:block text-sm text-gray-400 uppercase'>
              Step 4
            </h2>
            <p className='hidden md:block font-semibold text-white uppercase'>
              Summary
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step
