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

@Service
public class ProjectTaskService {
    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {
        //All project tasks to be added to a specific project, (project !=null) => backlog exists
        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();
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
        if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
            projectTask.setPriority(3);

        }
        //Set status when (status = null)
        if (projectTask.getStatus() == "" || projectTask.getStatus() == null) {
            projectTask.setStatus("TO_DO");
        }

        return projectTaskRepository.save(projectTask);

    }

    public Iterable<ProjectTask> findBacklogById(String id, String username) {

        projectService.findProjectByIdentifier(id, username);


        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    //Get task by sequence
    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id, String username) {
        //Backlog should exist
        projectService.findProjectByIdentifier(backlog_id, username);
        //Task should exist
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if (projectTask == null) {
            throw new ProjectNotFoundException("Project task '" + pt_id + "' not found!.");
        }
            //make sure that our task exists


            //make sure that the backlog/project id in the path corresponds to the right project
        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
                throw new ProjectNotFoundException("Project Task '" + pt_id + "' does not exist in project: '" + backlog_id);
            }

        return projectTask;
    }

        public ProjectTask updateByProjectSequence( ProjectTask updatedTask, String backlog_id, String pt_id, String username){
            ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);

            projectTask = updatedTask;

            return projectTaskRepository.save(projectTask);
        }


        public void deletePTByProjectSequence(String backlog_id, String pt_id, String username){
            ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);
            projectTaskRepository.delete(projectTask);
        }
}
