package com.example.pmsystem.services;

import com.example.pmsystem.domain.Backlog;
import com.example.pmsystem.domain.Project;
import com.example.pmsystem.exceptions.ProjectIdException;
import com.example.pmsystem.repository.BacklogRepository;
import com.example.pmsystem.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project){
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            if(project.getId() == null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            }

            if(project.getId() != null) {
                project.setBacklog(backlogRepository
                        .findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
            }

            return projectRepository.save(project);
        }catch(Exception e){
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase()
                    + "' already exists!");
        }
    }

    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByprojectIdentifier(projectId.toUpperCase());
        if(project == null){
            throw new ProjectIdException("Project does not exist!");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByprojectIdentifier(projectId.toUpperCase());
        if(project == null){
            throw new ProjectIdException("Cannot delete Project with ID '"
                    + projectId + "'. This project does not exist!");
        }
        projectRepository.delete(project);
    }
}
