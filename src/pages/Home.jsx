import React from 'react'
import { Hero } from '../myComponents/hero/Hero'
import { WhatICanDo } from '../myComponents/what_I_can_do/WhatICanDo'
import { LatestProjects } from '../myComponents/latestProjects/LatestProjects'

export const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <WhatICanDo/>
            <LatestProjects/>
        </div>
    )
}
