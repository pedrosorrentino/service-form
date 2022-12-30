import Step from '../components/Step'
import YourInfo from '../components/YourInfo'
import SelectPlan from '../components/SelectPlan'
import Addons from '../components/Addons'
import Summary from '../components/Summary'
import Final from '../components/Final'

import FooterNav from '../components/FooterNav'
import BaseLayout from '../layouts/BaseLayout'
import { useUserFormStore } from '../stores/useUserStore'

export default function Home() {
  const { stepNumber } = useUserFormStore()
  return (
    <BaseLayout title={'Universal Form'}>
      <div className='mx-auto md:max-w-5xl md:flex md:bg-white md:shadow-md md:rounded-xl'>
        <div id='sidebar-left'>
          <Step />
        </div>
        <div id='content' className=' md:w-3/4 '>
          {stepNumber === 0 && <YourInfo />}
          {stepNumber === 1 && <SelectPlan />}
          {stepNumber === 2 && <Addons />}
          {stepNumber === 3 && <Summary />}
          {stepNumber === 4 && <Final />}
          <FooterNav />
        </div>
      </div>
    </BaseLayout>
  )
}
