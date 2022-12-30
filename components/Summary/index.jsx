import TitlePage from '../../layouts/TitlePage'
import SummaryCard from './SummaryCard'

const Summary = () => {
  return (
    <div className='-mt-10 mx-5 p-5 md:mt-5 bg-white rounded-md'>
      <TitlePage
        title={'Finishing up'}
        desc={'Double-check everything looks OK before confirming'}
      />

      <div className='flex flex-col gap-5 py-8'>
        <SummaryCard />
      </div>
    </div>
  )
}

export default Summary
