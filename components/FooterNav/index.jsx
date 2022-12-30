import { useUserFormStore } from '../../stores/useUserStore'

const FooterNav = () => {
  const { stepNumber, nextStepNumber, backStepNumber } = useUserFormStore()

  const nextStep = () => {
    nextStepNumber()
  }
  return (
    <>
      {stepNumber >= 4 ? (
        ''
      ) : (
        <div className='w-full fixed bottom-0 sm:relative'>
          <div
            className={`flex ${
              stepNumber === 0 ? 'justify-end' : 'justify-between'
            } m-5`}
          >
            {stepNumber > 0 && (
              <button
                onClick={backStepNumber}
                className='font-bold hover:text-slate-500'
              >
                Go back
              </button>
            )}
            {stepNumber === 0 ? (
              ' '
            ) : (
              <button
                onClick={nextStep}
                className='bg-slate-900 rounded text-white font-bold p-2 hover:bg-[#483EFF] hover:text-white'
              >
                {stepNumber === 3 ? 'Confirm' : 'Next step'}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default FooterNav
