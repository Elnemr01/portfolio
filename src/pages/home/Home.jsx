import { Hero } from '@/myComponents/hero/Hero'
import { WhatICanDo } from '@/myComponents/what_I_can_do/WhatICanDo'
import React from 'react'

export const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <WhatICanDo/>
        </div>
    )
}
