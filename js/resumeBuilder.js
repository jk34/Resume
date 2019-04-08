
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "Clearpath Workforce Management",
			"title": "Algorithm Development Engineer - Contractor at Advantest",
			"location": "Huntington Beach, CA",
			"dates": "December 2017 - Present",
			"description": "Developed image processing algorithms in Matlab that remove noise from images, detect the objects in images, and find the edge positions with subpixel accuracy.		Compared various existing image deblurring algorithms, including Convolutional Neural Network (CNN) models using Keras, to determine which algorithms performed best on proprietary images"
		},
		{
			"employer": "Self-Employed",
			"title": "Data Science Freelancer",
			"location": "Huntington Beach, CA",
			"dates": "December 2016 - March 2017",
			"description": "Provided data science and machine learning consulting services for various projects, such as collaborating with Language Technology Solutions, LLC. to use Python to parse text documents to identify candidate signifier phrases and store their scores from various Natural Language Processing (NLP) packages"
		},
		{
			"employer": "Clarity Solution Group",
			"title": "Senior Associate Consultant",
			"location": "Redwood City, CA",
			"dates": "March 2016 - June 2016",
			"description": "Set up AWS EC2 instances to work on data pipelining exercises with Hadoop, MapReduce, Hive, and Pig"
		},
		{
			"employer": "University of Texas at Austin",
			"title": "Research Assistant",
			"location": "Austin, TX",
			"dates": "October 2014 - May 2016",
			"description": "Modified an existing C++ program that computes the surface mesh, smooth surface, and energy of an input biomolecule so that it could run more efficiently and generate multiple configurations of the initial biomolecule.		Implemented parallel programming with MPI into the program to calculate the meshes, smooth surfaces, and energies of the configurations in parallel"
		},
		{
			"employer": "University of Texas at Austin",
			"title": "Teaching Assistant",
			"location": "Austin, TX",
			"dates": "August 2011 - May 2012, August 2014 - May 2015",
			"description": "Taught undergraduate physics lab courses"
		},
		{
			"employer": "Corebank",
			"title": "Software Developer",
			"location": "Seoul, Korea",
			"dates": "November 2012 - November 2013",
			"description": "Used C# and Silverlight to create a custom controls that allow the user to create and move objects around"
		},
		{
			"employer": "Applied Operations Research, Inc.",
			"title": "Intern",
			"location": "Solana Beach, CA",
			"dates": "June 2009 - September 2009",
			"description": "Utilized proprietary software and algorithms written in Matlab to analyze underwater acoustic propagation and perform physics-based modeling of ocean wave phenomena and generate plots"
		}

	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		
		{
			"title": "Determining most important positions in the game of football",
			"description": "Obtained data with web scraping, cleaned the data, determined the most relevant positions using Random Forest and Lasso Regression, and used ggplot2 for data visualization",
			"image": "../static/images/NFL.png",
			"github": "https://github.com/jk34/NFL_model",
			"details": "http://jerrykim.weebly.com/blog/what-positions-in-football-correlate-the-most-with-winning"
		},
		{
			"title": "San Francisco crime classification Kaggle competition",
			"description": "Used random forests (RF), linear discriminant analysis (LDA), and boosting on a data set (consisting of almost a million rows) to predict the classification of crimes",
			"image": "../static/images/SFcrime2.jpg",
			"github": "https://github.com/jk34/Kaggle_SF_Crime_Classification",
			"details": "http://jerrykim.weebly.com/blog/using-boosting-for-sf-crime-classification-kaggle-project"
		},
		{
			"title": "NCAA tournament Kaggle competition",
			"description": "Used machine learning algorithms such as support vector machines (SVM), K-nearest neighbors (KNN), linear discriminant analysis (LDA) and logistic regression in R to predict the winners of the NCAA basketball tournament",
			"image": "../static/images/ncaaKaggle1.png",
			"github": "https://github.com/jk34/Kaggle_NCAA_logistic_trees_SVM",
			"details": "http://jerrykim.weebly.com/blog/using-pandas-on-ncaa-tournament-data-from-kaggle"
		},
		{
			"title": "Loan default Kaggle competition",
			"description": "Cleaned dirty data and removed outliers. Then used Logistic Regression with Regularization to identify the most important predictors that determine whether a loan will default or not",
			"image": "../static/images/loan2.png",
			"github": "https://github.com/jk34/Kaggle_Credit_Default_Loan",
			"details": "http://jerrykim.weebly.com/blog/-kaggle-competition-on-credit-scoring-to-predict-defaults"
		},
		{
			"title": "Linear and Bayesian regression of NBA data using Markov Chain Monte Carlo simulations",
			"description": "Implemented Best Subset, Forward Step, and Backward Step algorithms to linear regression model to determine that only 8 out of 26 original NBA statistics were relevant predictors of teams' winning percentages. Used Markov Chain Monte Carlo techniques in R to Bayesian regression model.",
			"image": "../static/images/NBA.png",
			"github": "https://github.com/jk34/Bayes1_MarkovChainMonteCarlo_SDS384",
			"details":"http://jerrykim.weebly.com/blog/archives/07-2015"
		},

		/*
		{
			"title": "Predicting the tags of physics questions from Stack Exchange",
			"description": "Wrote a NLP script in Python to extract the key words and bi-grams from the titles, text, and tags of Stack Exchange questions to predict the tags of those questions. (Link to Github and my blog with be posted after the Kaggle competition ends in March)",
			"image": "../static/images/physics_tags.png",
			"github": "https://www.kaggle.com/c/transfer-learning-on-stack-exchange-tags/leaderboard",
			"details": "https://www.kaggle.com/c/transfer-learning-on-stack-exchange-tags/leaderboard"
		},
		{
			"title": "Determining the tone of content from websites with NLP",
			"description": "Performed web scraping, cleaned dirty data, and used word2vec and NLTK in Python to perform sentiment and text analysis of content from an internet forum",
			"image": "../static/images/gamefaqs.png",
			"github": "https://github.com/jk34/NLP_web",
			"details": "http://jerrykim.weebly.com/blog/can-nlp-quantify-the-tone-of-internet-forums-and-determine-if-the-overall-tone-is-positive-or-negative"
		},
		{
			"title": "Programming a card game",
			"description": "Used C++/C#/Python to develop a card game using object-oriented programming to allow user to play cards in a two-player game and choose where to set the cards on a playing field. Developed the abilities of about 50 different cards",
			"image": "../static/images/yugioh.jpg",
			"github": "https://github.com/jk34/Card_game_cpp",
			"details": "http://jerrykim.weebly.com/blog/simulation-of-yu-gi-oh-card-game-written-in-c-and-c"
		},
		{
			"title": "Polls web app in Django",
			"description": "Basic polls web developed with Django. This provides the user with a list of questions, multiple choices for each question, and displays total votes for each answer. It also allows the user to click on a link to download a file containing the questions, choices, and votes",
			"image": "../static/images/polls.png",
			"github": "https://github.com/jk34/jerry-django-polls",
			"details": "https://jerry-django-polls.herokuapp.com/polls"
		},
		{
			"title": "Basic blog in Django",
			"description": "Basic blog developed with Django that contains blog posts, my contact information, and links to my Linkedin and Github",
			"image": "../static/images/djangoblog.png",
			"github": "https://github.com/jk34/Django_blog",
			"details": "https://jerrydjangoblog.herokuapp.com/"
		},
		{
			"title": "Resume",
			"description": "Resume project for Javascript Basics course offered by Udacity. Utilized HTML, CSS, Bootstrap, Google Maps API, and Javascript",
			"image": "../static/images/resume.png",
			"github": "https://github.com/jk34/Resume1_",
			"details": "http://jerrykim.weebly.com/blog/online-version-of-my-resume"
		},
		{
			"title": "Using Flask to display NCAA Basketball Tournament predictions",
			"description": "Flask web-application that lets the user select which 2 teams will play in a matchup and see the corresponding winning probabilities for each team for that matchup",
			"image": "../static/images/NCAAFlask.png",
			"github": "https://github.com/jk34/NCAA_Flask",
			"details": "http://jerrykim.weebly.com/blog/display-ncaa-basketball-tournament-predictions-with-flaskjavascript"
		},
		{
			"title": "Flask web application for user handling",
			"description": "Flask web-application that lets the user register an account, log in, and log out",
			"image": "../static/images/Register.png",
			"github": "https://github.com/jk34/Python_Flask",
			"details": "http://jerrykim.weebly.com/blog/web-application-allowing-registration-and-login-using-flask"
		}
		*/
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Jerry",
	"last name": "Kim",
	"role": "Python Freelancer",
	"welcome message": "I am seeking freelance opportunities using Python for web development and data science. My blog is available at jerrykim.weebly.com and my Github is available at www.github.com/jk34",
	"role": "Expertise in Image Processing, Machine Learning, and Python Programming",
	"welcome message": "I am confident that I can solve your problems by developing robust solutions efficiently to save you precious time and money.",
	"bio pic": "https://lh3.googleusercontent.com/-SBN15tcmbC8/UkCdJGCGHOI/AAAAAAAAAVE/Gjs_4zrqmfY/w140-h140-p/LeiZ.JPG",
	"contacts": 
		{
			"phone": "657-244-6683",
			"email": "jerry.kim12@protonmail.com",
			"github": "www.github.com/jk34",
			"linkedin": "www.linkedin.com/in/jerrykim12",
			"blog": "jerrykim.weebly.com",
			"location": "Huntington Beach, CA"
		}

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "University of Texas at Austin",
			"location": "Austin, TX",
			"degree": "M.A.",
			"majors": ["M.A. in Physics"],
			"dates": "2016",
			"url": "http://www.utexas.edu/"
		},
		{
			"name": "University of California at Los Angeles",
			"location": "Los Angeles, CA",
			"degree": "Bachelars",
			"majors": ["B.S. in Applied Math, Physics"],
			"dates": "2009",
			"url": "http://www.ucla.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity"
		},
		{
			"title": "R Programming",
			"school": "Coursera",
		},
		{
			"title": "Data Manipulation at Scale",
			"school": "Coursera"
		},
		{
			"title": "Computational Investing",
			"school": "Coursera"
		},
		{
			"title": "Learning Python for Data Analysis and Visualization",
			"school": "Udemy"
		},
		{
			"title": "Machine Learning",
			"school": "Coursera"
		},
		{
			"title": "Using Databases with Python",
			"school": "Coursera"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 7,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 4,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "PHP",
    labelcolor: "yellow"
  },
  {
    value: 6,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "WordPress",
    labelcolor: "gray"
  },
  {
    value: 5,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 3,
    color: "#4D5360",
    highlight: "#616774",
    label: "MySQL",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






