import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public socialMediaLinks;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.socialMediaLinks = this.projectService.getSocialMediaLinks();
  }

}
