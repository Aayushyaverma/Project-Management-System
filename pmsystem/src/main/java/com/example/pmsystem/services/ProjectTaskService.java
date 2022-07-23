package com.example.pmsystem.services;

import com.example.pmsystem.domain.Backlog;
import com.example.pmsystem.domain.Project;
import com.example.pmsystem.domain.ProjectTask;
import com.example.pmsystem.exceptions.ProjectNotFoundException;
import com.example.pmsystem.repository.BacklogRepository;
import com.example.pmsystem.repository.ProjectRepository;
import com.example.pmsystem.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        //Exception Handling: Project not found
        try{
            //All project tasks to be added to a specific project, (project !=null) => backlog exists
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
            //Set the backlog to the project tasks
            projectTask.setBacklog(backlog);
            //Project sequence to be like IDPRO-1, IDPRO-2....
            Integer BacklogSequence = backlog.getPTSequence();
            //Update the backlog sequence
            BacklogSequence++;

            backlog.setPTSequence(BacklogSequence);
            //Add sequence to project task
            projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            //Set initial priority when (priority = null)
            if(projectTask.getPriority() == null){
                projectTask.setPriority(3);
            }
            //Set status when (status = null)
            if(projectTask.getStatus() == "" || projectTask.getStatus() == null){
                projectTask.setStatus("TO_DO");
            }

            return  projectTaskRepository.save(projectTask);
        } catch (Exception e){
            throw new ProjectNotFoundException("Project not found !");
        }

    }

    public Iterable<ProjectTask>findBacklogById(String id){

        Project project = projectRepository.findByprojectIdentifier(id);
        if(project == null){
            throw new ProjectNotFoundException("Project with ID '" + id +"' does not exist.");
        }

        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    //Get task by sequence
    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id){
        //Backlog should exist
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);
        if (backlog== null){
            throw new ProjectNotFoundException("Project with ID '" + backlog_id +"' does not exist.");
        }
        //Task should exist
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if(projectTask == null){
            throw new ProjectNotFoundException("Project task '" + pt_id +"' not found!.");
        }

        if(!projectTask.getBacklog().getProjectIdentifier().equals(backlog_id)){
            throw new ProjectNotFoundException("Project task '" + pt_id + "' does not exit in project: " + backlog_id);
        }
        return projectTask;
    }

    //Update Task
    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String backlog_id, String pt_id){
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id);
        projectTask = updatedTask;

        return projectTaskRepository.save(projectTask);

    }

    public void deletePTByProjectSequence(String backlog_id, String pt_id){
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id);

        projectTaskRepository.delete(projectTask);
    }

}
