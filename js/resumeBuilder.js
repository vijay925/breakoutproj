var formattedName = HTMLheaderName.replace('%data%', "Arturo Muller");
var formattedRole = HTMLheaderRole.replace('%data%',"Full-Stack Developer & Data Analayst");







var bio = {
    "name": "Arturo",
    "role": "Technology Consultant",
    "contact": "amullersimons@gmail.com",
    "picture": "images/arturo.jpg",
    "message": "Developer who improves access to vital information for business users. Develops dashboards, reports and websites for structured, drillable search for senior business users. Develop and manage client relationships for business development. Strengths include bringing organization and solutions to technology projects, asking clarifying questions, producing financial insights as well facilitating group decision making.",
    "skills": "too much to put on paper"
}


var work = {
  "jobs": [
    {
      "company": "Infosys",
      "position": "Technology Associate",
      "description": "Software Development constulting for Fortune 500 clients",
      "start": "July 2017",
      "end": null,
      "city": "Moline, IL"
    },
    {
      "company": "Overseas Management Company",
      "position": "Financial Analyst",
      "description": "Planned researched and executed cost saving and efficiency oriented projects",
      "achievements": [
        "Devised and implemented a plan that amounted to significant courier savings",
        "Automated spreadsheet templates and other cost accounting functions with visual basic and excel macros",
        "Prepared cost accounting reports for management in order to view the business from different perspectives in order to take decisions",
        "Prepared market analyses using a web crawler to extract online data in order to determine market share in Panamas company registry"
      ],
      "start": "January 2010",
      "end": "May 2014",
      "city": "Panama City"
    },
    {
      "company": "Copa Airlines",
      "position": "Planning Analyst",
      "description": " Managed the flight profitability system by gathering statistics and accounting to analyze and determine the breakeven point of all flight routes",
      "achievements": [
        "Prepared monthly reports for the management team and made quarterly presentations of COPA\u2019s flight profitability results, break-even load factors, yields, and other indicators",
        "Created a tool to view flight break-even which was used by other departments to make cost-effective decisions",
        "Recommended a more precise method than what was used in order to allocate total contribution revenue of connecting flights"
      ],
      "start": "July 2008",
      "end": "December 2009",
      "city": "Panama City"
    }
  ],
  "internships": [
    {
      "company": "NOMI",
      "position": "Full Stack Developer",
      "start": "December 2016",
      "end": "May 2015",
      "city": "New York"
    },
    {
      "company": "AIG",
      "position": "Business Intelligence Developer",
      "start": "May 2015",
      "end": "Aug 2015",
      "city": "New York"
    }
  ]
}
var education =  {"schoolsAttended": [{
    "school": "New York University",
    "years": "2014-2016",
    "city": "New York",
    "majors": "Information Systems"
},{
    "school": "American University",
    "years": "2002-2008",
    "city": "Washington D.C.",
    "majors": "Business Adminsitration"
}]}


var projects = [
  {
    "title": "Two-Pass Linker",
    "date": 2015,
    "description": "implemented a two pass linker using C++",
    "image": "images\/linker.png"
  },
  {
    "title": "Mememory Management Unit",
    "date": 2015,
    "description": "implemented a single pagetable virtual memory management unit using C++",
    "image": "images\/pagetable.png"
  },
  {
    "title": "NYC Big Data Rent Control",
    "date": 2016,
    "description": "Used Hadoop and NYC public data to find the correlation between rent controlled buildings and vermin infestation complaints",
    "image": "images\/BigData.png"
  }
]

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



// $('#main').append(bio.name, bio.role);
// $('#main').append(work.company, work.start);
$('#main').append(internationalizeButton);

if(bio.skills){
    $('#header').append(HTMLskillsStart);
    var skills = HTMLskills.replace('%data%', bio.skills);
    $('#skills').append(skills);
}

function displayWork(){

work.jobs.forEach(function(element){
    $('#workExperience').append(HTMLworkStart);
    var workEmployer = HTMLworkEmployer.replace('%data%', element.company);
    var workTitle = HTMLworkTitle.replace('%data%', element.position);
    var workDates = HTMLworkDates.replace('%data%', element.start + (element.end? '-' + element.end : '-present'));
    var workLocation = HTMLworkLocation.replace('%data%', (element.city? element.city : ''));
    var workDescription = HTMLworkDescription.replace('%data%',(element.description? element.description: ''));

    var achievementList = '';
    var workAchievements = '';

    if(element.achievements){
    element.achievements.forEach(function(element){
        achievementList += HTMLworkAchievement.replace('%data%', element)
    });

    workAchievements = HTMLworkAchievements.replace('%data%', achievementList);
    }

    $('.work-entry:last').append(workEmployer + workTitle + workDates + workLocation + workDescription + workAchievements);
});
}

displayWork();

projects.display = function(){
    projects.forEach(function(element){
        $('#projects').append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace('%data%', element.title);
        var projectDates = HTMLprojectDates.replace('%data%', element.date);
        var projectDescription = HTMLprojectDescription.replace('%data%', element.description);
        var projectImage = HTMLprojectImage.replace('%data%', element.image);
        $('.project-entry:last').append(projectTitle + projectDates + projectDescription + projectImage);
    });
}

projects.display();





$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});










function inName(name){
    var nameArr = name.split(" ");
    nameArr[0] = nameArr[0].split("");
    nameArr[0][0] = nameArr[0][0].toUpperCase();

    for(var i = 1; i < nameArr[0].length; i++){
        nameArr[0][i] = nameArr[0][i].toLowerCase();
    }
    nameArr[0] = nameArr[0].join('');


    nameArr[1] = nameArr[1].toUpperCase();

   return nameArr[0] + " " + nameArr[1];
}


$('#mapDiv').append(googleMap);

