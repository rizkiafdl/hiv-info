import SectionLayout from '@/components/layouts/SectionLayout'
import React from 'react'
import { TimelineDemo } from './TimelineComponent'

export const SectionIntroduction = () => {

    return (
        <SectionLayout>
            <div className=''>

                <h1 className='text-3xl text-left font-bold '>What Is HIV?</h1>
                <TimelineDemo />
            </div>
        </SectionLayout>
    )
}
