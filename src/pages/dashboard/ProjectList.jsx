import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Button } from '../../components/ui/button'
import useGetAllProjects from '@/hooks/dashboard/useGetAllProjects'
import client from '@/api/axios'
import { useQuery } from '@tanstack/react-query'

const ProjectList = () => {
    const [expandedId, setExpandedId] = useState(null)

    const {allProjects,isLoading,isError} = useGetAllProjects();

    // console.log(allProjects?.data)


    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const getStatusColor = useCallback((status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800'
            case 'in-progress': return 'bg-yellow-100 text-yellow-800'
            case 'planned': return 'bg-blue-100 text-blue-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    },[])

    if(isLoading) return <div>Loading...</div>
    if (isError) return <div>error...</div>

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">All Projects</h1>
                <div className="space-y-4">
                    {allProjects?.data?.length >0 && allProjects?.data?.map((project, index) => {
                        const isCustom = index >= allProjects?.data?.data?.length
                        const uniqueId = isCustom ? `custom-${index}` : `default-${index}`
                        const isExpanded = expandedId === uniqueId

                        return (
                            <div key={uniqueId} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
                                            {project.status && (
                                                <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => toggleExpand(uniqueId)}
                                            className="w-full md:w-auto"
                                        >
                                            {isExpanded ? 'Hide Details' : 'Show Details'}
                                        </Button>
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="border-t bg-gray-50 p-6 animate-slide-down">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            {project.image && (
                                                <div className="md:col-span-2">
                                                    <img
                                                        src={project.image}
                                                        alt={project.name}
                                                        className="w-full max-h-64 object-cover rounded-lg"
                                                    />
                                                </div>
                                            )}

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                                                <div className="space-y-1 text-gray-600">
                                                    {project.description?.map((desc, i) => (
                                                        <p key={i} className="text-sm">• {desc}</p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-2">Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies?.map((tech, i) => (
                                                        <span key={i} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="md:col-span-2 space-y-2">
                                                <div className="flex flex-wrap gap-4">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {project.liveLink && (
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                            </svg>
                                                            Live Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                {allProjects?.data.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No projects found.
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default ProjectList