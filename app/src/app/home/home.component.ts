import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public me = {
    name: "Kevin Fabian",
    experience: "6 years",
    profession:"Software Engineer",
    specialty:"#Java Spring Boot Developer",
    motto:"Don't reinvent the wheel, just realign it. - Anthony J. D'Angelo",
    currentCompany:"Collabera Inc.",
    aboutMe:
    `
    <p>
    Highly-experienced senior software engineer with 6 years of experience.
    Worked with big projects such as Unionbank and Maya.
    Developed and maintained various types of microservices using Java 11, Spring Boot AWS Services, and Kafka.
    Exposed with containerized and with CI/CD.
    Experienced with auto-testing using python and behave
    Ensured application maximum performance by executing load testing/soak testing.
    </p>
    <p>Feel free to contact me if you need Java Spring boot developer, we can talk.</p>
    `,
    resume: {
      label:"My CV",
      url:"https://docs.google.com/document/d/1yXioJSlwy7J0hhwNjZF1iD-8KlUnaBCgK_fs-hK8QEM/edit?usp=sharing"
    },
    contact: {
      mobileNumber: '0922 634 9311',
      email: 'fbian.kevin@gmail.com',
      address: 'Hagonoy, Bulacan Philippinnes',
      socialMediaAccount: {
        facebookLink: 'https://www.facebook.com/kevz.fabian',
        githubLink:"https://github.com/fabian-kev"
      }
    }
  }
  public comLanguage = [
    "English",
    "Filipino"
  ]
  
  public languages = [
    "Java",
    "Kotlin",
    "SQL",
    "Javascript",
    "Typescript",
  ]
  public libraries = [
    "Spring Boot",
    "Spring JPA",
    "Spring Web",
    "Spring Security",
    "Oauth2",
    "JSON Web Token",
    "Spring Caching",
    "Authorization Server/Client",
    "Async",
    "Scheduling",
    "Mapstruct",
    "Lombok",
    "Spring Cloud Kubernetes",
    "Spring Cloud Loadbalancer",
    "Eureka Discovery Server/Client",
    "Spring Cloud Config Server",
    "Spring Cloud Gateway",
    "OpenFeign",
    "Resillence4j/Hystrix",
    "Sleuth",
    "OpenApi 3",
    "Actuator",
    "SFTP/FTP",
    "JasperReport",
    "Kafka",
    "Junit",
    "Mockito",
    "Mockwebserver",
    "Authorized/Resource Server",
    "GSON",
    "Jackson",
    "JAXB",
    "Spring AWS",
  ]
  public tools = [
    "AWS(SQS, SNS, Lambda, S3)",
    "Localstack",
    "Wiremock",
    "Kubernetes",
    "Docker",
    "Sonarlint",
    "Sonarcube",
    "Gradle",
    "Maven",
    "IntelliJ",
    "DataGrip",
    "VS Code",
    "PostMan",
    "Putty",
    "WinSCP"
  ]
  public databases = [
    "MySQL",
    "Oracle",
    "PostgreSQL",
    "H2",
    "MongoDB"
  ]

  public expertise2 = [
    {
      "title": "Java 8/11 & Spring Boot Framework",
      "level": "EXPERT",
      "class": "expert-level"
    },
    {
      "title": "RESTful API & Microservices",
      "level": "EXPERT",
      "class": "expert-level"
    },
    {
      "title": "AWS(SQS,SNS,Lambda,S3)",
      "level": "EXPERT",
      "class": "expert-level"
    },
    {
      "title": "Kafka",
      "level": "EXPERT",
      "class": "expert-level"
    },
    {
      "title": "Databases",
      "level": "EXPERT",
      "class": "expert-level"
    },
    {
      "title": "Docker/K8s",
      "level": "PROFICIENT",
      "class": "proficient-level"
    }
   

  ]

  public projects = []

  public companies = [
    {
        "name": "Collabera Inc. 2021 - Present",
        "jobTitle":"Software Engineer/Java Spring boot Developer -",
        "responsibility": `
           Developing microservices, maintaining and optimizing existing microservices, creating lambdas, optimizing databases, support, collab with others, and document the services
        `,
        "techStacks": [
          "Java 8/11",
          "Spring boot",
          "Clean Architecture",
          "PostGreSQL",
          "Liquibase",
          "JOOQ",
          "Oracle",
          "Maven",
          "Git",
          "Gitlab",
          "DataGrip",
          "IntelliJ",
          "Kafka",
          "AWS(SQS,SNS,Lambda,S3, ec2)",
          "Microservices",
          "RESTful API",
          "Docker",
          "Kubernetes",
          "Wiremock",
          "Localstack",
          "Python",
          "Behave",
          "Gitlab CI",
          "Burpscan",
          "Load Testing",
          "Junit4/5",
          "mockwebserver",
          "Spring EL", 
        ]
    },
    {
      "name": "Tagit PH 2021 Nov - 2021 April 6",
      "jobTitle":"Software Engineer/Java Spring boot Developer -",
      "description":`
          I've been working here since april, currently working with a bank related project   
      `,
      "responsibility": `
         Developing microservices, maintaining and optimizing existing microservices, optimizing databases, support, and document the services
      `,
      "techStacks": [
          "Java",
          "Spring boot",
          "RESTful API",
          "Clean Architecture",
          "Oracle",
          "MySQL",
          "Maven",
          "Gradle",
          "Git",
          "Gitlab",
          "DataGrip",
          "IntelliJ",
          "Mobeix",
          "Jumio APIs",
          "Fincle APIs"
        
      ]
    },
    {
      "name": "Whitecloak Technology Inc #2019 - 2021",
      "jobTitle":"Software Engineer/Java Spring boot Developer -",
      "responsibility":`
        Developing microservices, maintaining and optimizing existing microservices, sharing ideas,  optimizing databases, support, collab with others, and document the services
      `,
      "techStacks": [
          "Java",
          "Springboot",
          "Mobeix",
          "Microservice",
          "Oracle",
          "Mysql",
          "Mongo",
          "Maven",
          "Gradle",
          "Git",
          "Gitlab",
          "DataGrip",
          "IntelliJ"
        
      ]
    },
    {
      "name": "Ziaplex Inc. #2018 - 2019",
      "jobTitle": "Software Engineer/Java Developer -",
      "responsibility":`
      Developing services and frontend using Angular, maintaining and optimizing existing services, optimizing databases, generating reports, debugging, support, collab with others, and document the services
      `,
      "techStacks": [
          "Java",
          "Kotlin",
          "Oracle",
          "Mysql",
          "Gradle",
          "Git",
          "Github",
          "DataGrip",
          "IntelliJ",
          "Postman"
        
      ]
    },
    {
      "name": "Firstcom Solution Inc # 2017 - 2018",
      "jobTitle": "Web Developer -",
      "responsibility": `
        Developing web app using wordpress, maintaining and improving existing web app, support, collab with others, deploy to production, and document the services
      `,
      "techStacks": [ 
          "PHP",
          "Wordpress",
          "MySQL",
          "PhpMyAdmin",
          "OpenCart",
          "Code Igniter",
          "Bootstrap",
          "Javascript",
          "CSS",
          "HTML"
      ]
    }
  ]
  public socialMediaLinks;
  public profilePicImageSrc;


  constructor(private projectService:ProjectService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects().slice(0,3);
    this.socialMediaLinks = this.projectService.getSocialMediaLinks();
    this.profilePicImageSrc = `${environment.host}/assets/images/me2.jpg`
  }


}
