import React from 'react'
import { Hero } from '../myComponents/hero/Hero'
import { WhatICanDo } from '../myComponents/what_I_can_do/WhatICanDo'

export const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <WhatICanDo/>
        </div>
    )
}
