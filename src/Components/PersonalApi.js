import Project1 from '../Assets/img/Website_1.png';
import Project2 from '../Assets/img/Website_2.png';
import Project3 from '../Assets/img/Website_3.png';
import Project4 from '../Assets/img/Website_4.png';
import Project5 from '../Assets/img/Website_5.png';

const ProjectApi = [
	{
		Id: "P1",
		Project: "Ristorante con Fusion",
		Create: "August 2020",
		Tools: ["Bootstrap 4", "HTML", "CSS"],
		Description: "Here is a Website that I created using Bootstrap 4 in Coursera as a part of my Capstone Project.",
		Link: "https://fiellucas.github.io/BootstrapFrameworkProject/",
		Img: Project1,
	},
	{
		Id: "P2",
		Project: "Restaurant Landing Page",
		Create: "December 2020",
		Tools: ["Bootstrap 4", "HTML", "CSS"],
		Description: "This site is a sample landing page to show my skill in website design",
		Link: "https://fiellucas.github.io/Capstone/",
		Img: Project2,
	},
	{
		Id: "P3",
		Project: "Resume Registry System",
		Create: "June 2021",
		Tools: ["Bootstrap 5", "HTML", "CSS", "PHP", "JavaScript"],
		Description: "Simple CRUD application created using PHP and MySQL as a part of capstone project in coursera.",
		Link: "http://resume-registry-system.000webhostapp.com/",
		Img: Project3,
	},
	{
		Id: "P4",
		Project: "SurPath Hub Hacktoberfest",
		Create: "September 2021",
		Tools: ["MDBBootstrap 5", "HTML", "CSS", "JavaScript"],
		Description: "Registration Website for SurPath Hub Hacktoberfest Event 2021",
		Link: "https://surpathhub.github.io/hacktoberfest-philippines",
		Img: Project4,
	},
	{
		Id: "P5",
		Project: "Simple Login-Signup Page",
		Create: "October 2021",
		Tools: ["MDBBootstrap 5", "HTML", "CSS", "JavaScript", "ReactJS", "react-router-dom", "localStorage"],
		Description: "Simple Login and Registration page",
		Link: "https://jcavenue.github.io/simple-registration-signin-page",
		Img: Project5,
	},
];

const ContactApi = [
	{
		Id: "C1",
		Icon: "phone-alt",
		IconType: "fas",
		ContactTitle: "+63 963 3218 452",
		Description: "Call me directly",
		Link: "tel:+63 963 3218 452",
		LinkText: "CALL"
	},
	{
		Id: "C2",
		Icon: "at",
		IconType: "fas",
		ContactTitle: "jcfababeir30@gmail.com",
		Description: "Send me an email",
		Link: "mailto:jcfababeir30@gmail.com",
		LinkText: "EMAIL"
	},
	{
		Id: "C3",
		Icon: "telegram",
		IconType: "fab",
		ContactTitle: "t.me/jcavenue",
		Description: "Message me on Telegram",
		Link: "https://t.me/jcavenue",
		LinkText: "MESSAGE"
	}
]

const WorkExperienceApi = [
	{
		CollapseId: "accordionCollapse4",
		HeaderTitle: "Software Quality Assurance Intern",
		Company: "Achieve Without Borders",
		Year: "October 2021 - Present",
		Task: ["Perform Manual Testing","Create Test Automation Using Cypress","Execute Regression Testing","Create Test Scenario"]
	},
	{
		CollapseId: "accordionCollapse3",
		HeaderTitle: "Assistant Graphic Designer",
		Company: "Kent Graphic Solution",
		Year: "October 2018 - March 2019",
		Task: ["Create Graphic Design for tarpaulin","Assisting in managing client's order","Work closely with the owner"]
	},
	{
		CollapseId: "accordionCollapse2",
		HeaderTitle: "Email Support Representative",
		Company: "SPi CRM Inc, now INSPIRO",
		Year: "April 2018 - August 2018",
		Task: ["Customer Service","Email Support"]
	},
	{
		CollapseId: "accordionCollapse1",
		HeaderTitle: "Office Personel",
		Company: "Traditional Food Corporation",
		Year: "Jan 2016 - October 2016",
		Task: ["Sorting files","Delivery Management"]
	},
]

const LanguagesAndToolsApi = [
	"HTML",
	"CSS",
	"Javascript",
	"React JS",
	"Redux",
	"MySQL",
	"PostgreSQL",
	"PHP",
	"Cypress",
	"Version Control",
	"Github/Gitlab"
]

const certificatesApi = [
	{
		id: "CER6",
		link: "https://www.credly.com/badges/ce65709a-33d2-44cc-a517-988318433006",
		c_name: "AWS Certified Cloud Practitioner" 
	},
	{
		id: "CER5",
		link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3ZYGPNC72GE3",
		c_name: "PostgreSQL for Everybody Specialization" 
	},
	{
		id: "CER4",
		link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WJXSQCTL436W",
		c_name: "Web Application for Everybody Specialization" 
	},
	{
		id: "CER3",
		link: "https://www.coursera.org/account/accomplishments/certificate/CBHFKKE8HL56",
		c_name: "Version Control with Git" 
	},
	{
		id: "CER2",
		link: "https://www.coursera.org/account/accomplishments/certificate/RUHW9MK5782D",
		c_name: "Front-End Web UI Frameworks and Tools: Bootstrap 4" 
	},
	{
		id: "CER1",
		link: "https://www.futurelearn.com/certificates/geih6gx",
		c_name: "IT ETHICS: Professionalism and Ethics in Computing" 
	}
]

export {
	ProjectApi,
	ContactApi,
	WorkExperienceApi,
	LanguagesAndToolsApi,
	certificatesApi
}