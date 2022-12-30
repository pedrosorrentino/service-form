import TitlePage from '../../layouts/TitlePage'
import ListOptions from './ListOptions'

const Addons = () => {
  return (
    <>
      <div className='-mt-10 mx-5 p-5 md:mt-5 bg-white rounded-md'>
        <TitlePage
          title={'Select your Addons'}
          desc={'All plan available in the shop'}
        />

        <div className='flex flex-col gap-5 py-8'>
          <ListOptions />
        </div>
      </div>
    </>
  )
}

export default Addons
