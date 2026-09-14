import client from "@/api/axios";


export const getAllProjects = () => client.get('/api/projects').then(res=> res.data)



export const addProjectFn = (data) => client.post('/api/projects/add',data,{
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})