import TitlePage from '../../layouts/TitlePage'
import PlanCard from './PlanCard'

const SelectPlan = () => {
  return (
    <>
      <div className='-mt-10 mx-5 p-5 md:mt-20 bg-white rounded-md'>
        <TitlePage
          title={'Select your plan'}
          desc={'All plan available in the shop'}
        />

        <PlanCard />
      </div>
    </>
  )
}

export default SelectPlan
