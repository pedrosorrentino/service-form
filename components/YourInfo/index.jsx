import { useUserFormStore } from '../../stores/useUserStore'
import { useForm } from 'react-hook-form'
import TitlePage from '../../layouts/TitlePage'

const YourInfo = () => {
  const { userForm, addToPersonalInfo, nextStepNumber } = useUserFormStore()
  const initialValue = {
    name: userForm.personalInfo.name,
    email: userForm.personalInfo.email,
    phone_number: userForm.personalInfo.phone_number,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue })
  const onSubmit = (data) => {
    addToPersonalInfo(data)
    nextStepNumber()
  }

  return (
    <div className='-mt-10 mx-5 p-5 md:p-0 md:mt-20 bg-white rounded-md'>
      <TitlePage
        title={'Personal Info'}
        desc={'Please provide your name, email address and phone number'}
      />
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-8'>
        <div>
          <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
            Name
          </label>
          <input
            className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
            type='text'
            placeholder='Rick Sánchez'
            {...register('name', { required: true, maxLength: 80 })}
          />
          {errors.name && (
            <span className='text-rose-500 text-xs font-semibold'>
              * Name is required
            </span>
          )}
        </div>
        <div>
          <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
            Email
          </label>
          <input
            className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
            type='text'
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className='text-rose-500 text-xs font-semibold'>
              * Email is required
            </span>
          )}
        </div>
        <div>
          <label className='absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white'>
            Phone Number
          </label>
          <input
            className='block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black'
            type='number'
            placeholder='Mobile number'
            {...register('phone_number', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.phone_number && (
            <span className='text-rose-500 text-xs font-semibold'>
              * Phone number is required
            </span>
          )}
        </div>
        <div className='flex justify-end'>
          <button
            className=' pointer bg-slate-900 rounded text-white font-bold p-2 hover:bg-[#483EFF] hover:text-white'
            type='submit'
          >
            Next step{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default YourInfo
