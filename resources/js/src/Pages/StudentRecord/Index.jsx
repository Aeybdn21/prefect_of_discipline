import React from 'react'
import AddingViolation from './AddingViolation' 
import Record from './Record'
import SanctionTabs from './SanctionTabs'
import { Tab } from '@headlessui/react'
import CaseStudy from './CaseStudy'
import InvestigationPage from './InvestigationPage'
 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() { 

  return ( 
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-3xl "> 
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Student Record
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Investigation
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Case Study
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
          Sanction & Punishment
          </Tab>
      </Tab.List>
      <Tab.Panels className={classNames(["m-4"])}>
          <Tab.Panel 
            className={classNames(
              'rounded-xl bg-white',
              'ring-white ring-opacity-60  '
            )}
          >
              <Record/>
          </Tab.Panel> 
          
          <Tab.Panel 
            className={classNames(
              'rounded-xl bg-white ',
              'ring-white '
            )}
          >
             <InvestigationPage/>
          </Tab.Panel> 
          <Tab.Panel 
            className={classNames(
              'rounded-xl bg-white ',
              'ring-white '
            )}
          >
            <CaseStudy/>
            {/* <AddingViolation/> */}
          </Tab.Panel> 
          <Tab.Panel 
            className={classNames(
              'rounded-xl bg-white ',
              'ring-white '
            )}
          >
            <SanctionTabs/>
          </Tab.Panel> 
      </Tab.Panels>
    </Tab.Group> 
  )
}