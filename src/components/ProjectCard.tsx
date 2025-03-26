import React from 'react';
import { Project } from '../data/projectList';
import '../styles/projectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className='project-card__container'>
            <h4 className='project-card__heading'>{project.name}</h4>
            <div className='project-card__inner-container'>
                {/* Side Bar */}
                <div className='project-card__side-bar'>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Owner/Client</p>
                        <p className='project-card__side-bar-text'>{project.owner}</p>
                    </div>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Location</p>
                        <p className='project-card__side-bar-text'>{project.location}</p>
                    </div>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Project Type</p>
                        <p className='project-card__side-bar-text'>{project.type}</p>
                    </div>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Services Provided</p>
                        <ul className='project-card__side-bar-list-item'>
                            {project.services.map((service) => (
                                <li className='project-card__side-bar-list-item'>{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Governing Specifications</p>
                        <ul className='project-card__side-bar-list-item'>
                            {project.specifications.map((specification) => (
                                <li className='project-card__side-bar-list-item'>{specification}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='project-card__side-bar-group'>
                        <p className='project-card__side-bar-title'>Utilized Staff</p>
                        <p className='project-card__side-bar-text'>{project.staff}</p>
                    </div>
                </div>
                {/* Main Content */}
                <div className='project-card__main-content'>
                    <div className='project-card__main-content-group'>
                        <p className='project-card__main-title'>Owner Objective</p>
                        <p className='project-card__main-text'>{project.objective}</p>
                    </div>
                    <div className='project-card__main-content-group'>
                        <p className='project-card__main-title'>Project Overview and Approach</p>
                        <p className='project-card__overview-text'>{project.overview.intro}</p>
                        {project.overview.scope.map((scope) => (
                            <div className='project-card__main-scope-container'>
                                <p className='project-card__main-scope-heading'>{scope.heading}</p>
                                <p className='project-card__main-scope-context'>{scope.context}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;