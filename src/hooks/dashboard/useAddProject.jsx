import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { addProjectFn } from '@/services/dashboard/services'
import { toast } from 'react-toastify'

const useAddProject = () => {
    
    const {mutate : addProject, isPending, isError} = useMutation({
        mutationKey: ['addProject'],
        mutationFn: (data) => addProjectFn(data),

        onSuccess: (data) => {
            toast.success('Project added successfully')
            console.log('Project added successfully:', data)
        },
        onError: (error) => {
            toast.error('Error adding project')
            console.error('Error adding project:', error)
        }
    })

    return {addProject, isPending, isError}

}

export default useAddProject