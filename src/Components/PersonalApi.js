import Project1 from '../Assets/img/Website_1.png';
import Project2 from '../Assets/img/Website_2.png';
import Project3 from '../Assets/img/Website_3.png';

const ProjectApi = [
	{
		Id: 1,
		Project: "Ristorante con Fusion",
		Create: "August 2020",
		Tools: ["Bootstrap 4", "HTML", "CSS"],
		Description: "Here is a Website that I created using Bootstrap 4 in Coursera as a part of my Capstone Project.",
		Link: "https://fiellucas.github.io/BootstrapFrameworkProject/",
		Img: Project1,
	},
	{
		Id: 2,
		Project: "Restaurant Landing Page",
		Create: "December 2020",
		Tools: ["Bootstrap 4", "HTML", "CSS"],
		Description: "This site is a sample landing page to show my skill in website design",
		Link: "https://fiellucas.github.io/Capstone/",
		Img: Project2,
	},
	{
		Id: 3,
		Project: "Resume Registry System",
		Create: "June 2021",
		Tools: ["Bootstrap 5", "HTML", "CSS", "PHP", "JavaScript"],
		Description: "Simple CRUD application created using PHP and MySQL as a part of capstone project in coursera.",
		Link: "http://resume-registry-system.000webhostapp.com/",
		Img: Project3,
	},
];

const ContactApi = [
	{
		Id: 1,
		Icon: "phone-alt",
		IconType: "fas",
		ContactTitle: "+63 963 3218 452",
		Description: "Call me directly",
		Link: "tel:+63 963 3218 452",
		LinkText: "CALL"
	},
	{
		Id: 2,
		Icon: "at",
		IconType: "fas",
		ContactTitle: "jcfababeir30@gmail.com",
		Description: "Send me an email",
		Link: "mailto:jcfababeir30@gmail.com",
		LinkText: "EMAIL"
	},
	{
		Id: 3,
		Icon: "telegram",
		IconType: "fab",
		ContactTitle: "t.me/jcavenue",
		Description: "Message me on Telegram",
		Link: "https://t.me/jcavenue",
		LinkText: "MESSAGE"
	}
]

export {
	ProjectApi,
	ContactApi
}