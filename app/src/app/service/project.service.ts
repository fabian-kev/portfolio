import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects = [
    {
      name: "PayMaya",
      description: `
        This is my current project, I've been working here as Backend Java Spring Boot developer. my daily responsibilities here are continuous developing microservices, creating AWS lambdas, support QE, optimize and update existing microservices, collab with others, sharing ideas, performing burp scan, load testing,
        document the services.
      `,
      imageSrc: "/assets/images/paymaya.jpg",
      company :"Collabera Inc.", 
      websiteLink: "https://play.google.com/store/apps/details?id=com.paymaya&hl=en_ZA&gl=US",
      techStacks: [
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
        "Spring EL"
        ]
    },
    {
      name: "Unionbank Online",
      "description":
      `
      I worked here for 1 year+ in work from home setup. I developed & integrated some apis here, update some apis and also add api versioning for backward compatibility.
      optimized some existing api by implementing caching and removing redundant repository/remote api call.`
      ,
      "imageSrc": "/assets/images/ub.PNG",
      "websiteLink":"https://online.unionbankph.com/online-banking",
      "company" :"Whitecloak Technology Inc.", 
      "techStacks": [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Spring Data",
        "Spring Web",
        "Spring Async",
        "Spring Scheduling",
        "Spring Caching",
        "Spring Cloud",
        "OpenFeign",
        "Zuul",
        "Retrofit",
        "Oracle",
        "WebLogic",
        "Ubuntu",
        "IntelliJ",
        "Data Grip"
      ]
    },
    {
      "name": "GetGoPay",
      "description": `
        I worked here for 1 year+, I developed several internal apis and integrated such as instapay, cash in via UBP, optimized jumio implementation and other existing apis. 
      `,
      "imageSrc":"/assets/images/getgo.PNG",
      "websiteLink":"https://www.getgopay.com.ph/",
      "company" :"Whitecloak Technology Inc.", 
      "techStacks": [
        "Java",
        "Spring Boot",
        "Spring Data",
        "Spring Web",
        "Spring Security",
        "Spring oauth2/JWT",
        "Spring Async",
        "Spring Scheduling",
        "Spring Caching",
        "Spring Cloud",
        "OpenFeign",
        "Zuul",
        "Retrofit",
        "Clean Architecture",
        "Microservice",
        "MySQL",
        "Ubuntu",
        "FTP",
        "SFTP",
        "Jumio",
        "DataGrip",
        "IntelliJ",
        "AMLA"
      ]
    },
    {
      name: "Tradeline Statistics Philippines",
      description: `
      I worked for this project as full stack for I think 8 months+,
       We started this project from the scratch. We used spring boot + angular to develop this website and the apis.
       We handled the huge amount of data by indexing and implementing spring caching.
      `,
      "imageSrc":"/assets/images/tradestats.PNG",
      "websiteLink":"http://www.tradelinephilippines.dti.gov.ph:8080/",
      "company" :"Ziaplex Inc.", 
      "techStacks": [
        "Java",
        "Spring boot",
        "Spring Caching",
        "Spring Web",
        "Spring Data",
        "Oracle",
        "Angular",
        "CSS/SCSS",
        "Typescript",
        "Javascript",
        "HTML",
        ""
      ]
    },
    {
      "name": "CityWash",
      "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/citywash.PNG",
      "websiteLink":"https://citywash.com.sg/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "WordPress",
        "Sublime"
      ]
    },
    {
      "name": "Enetek",
      "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/enetek.PNG",
      "websiteLink":"https://www.enetek-power.com/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "WordPress",
        "Sublime"
      ]
    },
    {
      "name": "Pacc Line",
      "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development",
      "imageSrc":"/assets/images/pacc.PNG",
      "websiteLink":"http://www.pacc.com.sg/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "WordPress",
        "Sublime"
      ]
    },
    {
      "name": "QB Printing",
      "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/qb.PNG",
      "websiteLink":"https://qbprinting.com/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
    
        "Javascript",
        "OpenCart",
        "Sublime"
      ]
    },
    {
      "name": "Cryoviva",
      "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/cryoviva.PNG",
      "websiteLink":"https://cryoviva.com.sg/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "OpenCart",
        "Sublime"
      ]
    },
    {
      "name": "Shiro-wa",
      "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/shirowa.PNG",
      "websiteLink":"https://shirowa-global.com/",
      "company" :"Firstcom Solution Inc.",    
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "OpenCart",
        "Sublime"
      ]
    },
    {
      "name": "Emtech",
      "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
      "imageSrc":"/assets/images/emtech.PNG",
      "websiteLink":"http://www.emtechinternational.com/",
      "company" :"Firstcom Solution Inc.", 
      "techStacks": [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "OpenCart",
        "Sublime"
      ]
    }
  ];

  socialMediaLinks = {
      facebook:'',
      linkedIn:'',
      github:'',
      cv:'https://docs.google.com/document/d/1GlnaIsMdzJOf3Cw-IX-fD78YoW0lUeeoxRNZAQRYDok/edit?usp=sharing'
  }
  
  constructor() { 
    console.log("Number of projects: " + this.projects.length)
  }

  getProjects(){
    this.projects.map(project => project.imageSrc = `${environment.host}${project.imageSrc}`)
    return this.projects;
  }

  getSocialMediaLinks() {
    return this.socialMediaLinks;
  }
}
