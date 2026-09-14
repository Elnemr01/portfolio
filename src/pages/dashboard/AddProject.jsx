import React, { useMemo, useState } from 'react'
import { Formik, Form, Field, FieldArray, useFormik } from 'formik'
import { Button } from '../../components/ui/button'
import useAddProject from '@/hooks/dashboard/useAddProject'



const AddProject = () => {

    const {addProject, isPending, isError} = useAddProject()

    const initialValues = useMemo(()=> {
        return {
            title: '',
            description: [''],
            status: 'completed',
            image: null,
            technologies: [''],
            githubLink: '',
            liveLink: '',
        }
    },[])

    const handleSubmit =(values)=> {
        const formData =new FormData();
        formData.append('title', values.title);
        formData.append(`description`, values.description);
        formData.append('status', values.status);
        formData.append(`technologies`, values.technologies);
        formData.append('githubLink', values.githubLink);
        formData.append('liveLink', values.liveLink);
        if (values.image) {
            formData.append('image', values.image);
        }

        addProject(formData);
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Project</h1>
                
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                                <Field
                                    type="text"
                                    name="title"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <FieldArray name="description">
                                    {({ push, remove }) => (
                                        <div className="space-y-2">
                                            {values.description.map((desc, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <Field
                                                        type="text"
                                                        name={`description.${index}`}
                                                        placeholder={`Description ${index + 1}`}
                                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                    {values.description.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => remove(index)}
                                                            className="px-3 py-2 text-red-600 hover:text-red-800"
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => push('')}
                                                className="text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                + Add Description
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <Field
                                    as="select"
                                    name="status"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="completed">Completed</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="planned">Planned</option>
                                </Field>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) => setFieldValue('image', e.currentTarget.files[0] ?? null)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                {values.image && (
                                    <p className="mt-1.5 text-sm text-gray-500">{values.image.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
                                <FieldArray name="technologies">
                                    {({ push, remove }) => (
                                        <div className="space-y-2">
                                            {values.technologies.map((tech, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <Field
                                                        type="text"
                                                        name={`technologies.${index}`}
                                                        placeholder={`Technology ${index + 1}`}
                                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                    {values.technologies.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => remove(index)}
                                                            className="px-3 py-2 text-red-600 hover:text-red-800"
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => push('')}
                                                className="text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                + Add Technology
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Link</label>
                                <Field
                                    type="url"
                                    name="githubLink"
                                    placeholder="https://github.com/username/repo"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Live Link</label>
                                <Field
                                    type="url"
                                    name="liveLink"
                                    placeholder="https://your-demo-url.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <Button type="submit" className="w-full py-3" disabled={isPending}>
                                {
                                    isPending ? 'Adding Project...' : 'Add Project'
                                }
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddProject