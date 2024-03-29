package com.example.pmsystem.web;

import com.example.pmsystem.domain.Project;
import com.example.pmsystem.repository.ProjectRepository;
import com.example.pmsystem.services.MapValidationErrorService;
import com.example.pmsystem.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!= null){
            return errorMap;
        }
        Project project1 = projectService.saveOrUpdateProject(project, principal.getName());

        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId, Principal principal){
        Project project = projectService.findProjectByIdentifier(projectId, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects(Principal principal){
        return projectService.findAllProjects(principal.getName());
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId, Principal principal){
        Project project = projectService.findProjectByIdentifier(projectId, principal.getName());
        projectService.deleteProjectByIdentifier(projectId, principal.getName());
        return new ResponseEntity<String>("Project with ID: '" + projectId + "' was deleted!", HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable Long id, @RequestBody Project project, BindingResult result) {

        Optional<Project> p = projectRepository.findById(id);
        if (p.isPresent()) {
            Project project1 = p.get();
            project1.setProjectName(project.getProjectName());
            project1.setDescription(project.getDescription());
            project1.setStart_date(project.getStart_date());
            project1.setEnd_date(project.getEnd_date());
            projectRepository.save(project1);
            return ResponseEntity.ok(p);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
