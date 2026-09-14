import { getAllProjects } from '@/services/dashboard/services'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useGetAllProjects = () => {
    
    const {data : allProjects, isLoading, isError} = useQuery({
        queryKey: ['allProjects'],
        queryFn: getAllProjects,
    })

    return {allProjects, isLoading, isError}


}

export default useGetAllProjects