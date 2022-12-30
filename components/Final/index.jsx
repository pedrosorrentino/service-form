import Image from 'next/image'
import { useUserFormStore } from '../../stores/useUserStore'

const Final = () => {
  const { changePlanStepNumber } = useUserFormStore()
  return (
    <div className='-mt-10 mx-5 p-5 md:mt-5 bg-white rounded-md'>
      <div id='message' className='flex flex-col items-center sm:mt-16 gap-4'>
        <Image
          src={`/assets/check.png`}
          width={128}
          height={128}
          alt='Thanks'
        />
        <h2 className='text-slate-800 text-4xl font-bold'>Thank you!</h2>
        <p className='text-gray-500 text-center'>
          Thanks for confirming your subscription! We hope you have fun using
          our plataform. If you ever need support, please feel free to email us
          at support@youremail.com
        </p>
        <button
          onClick={() => changePlanStepNumber(0)}
          className='mt-5 underline underline-offset-2 hover:text-[#483EFF]'
        >
          Restart form!
        </button>
      </div>
    </div>
  )
}

export default Final
