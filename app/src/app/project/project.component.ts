import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects = [];
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
