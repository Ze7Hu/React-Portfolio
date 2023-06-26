
  import tripguide from "../assets/tripguide.png";
  import carrent from "../assets/carrent.png";
  import jobit from "../assets/jobit.png"
  import passwordgen from '../assets/passwordgen.png';
  import employee from '../assets/employee.png';
  import restaurant from '../assets/restaurant.png';
  import horrison from '../assets/horrison.jpeg';
  import note from '../assets/note.jpeg';
  import sociosynergy from '../assets/sociosynergy.jpeg';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const experiences = [
    
    {
      title: "Restaurant-Finder-App",
      tech: "HTML Interactive Web Native CSS &Tailwind css Responsive Layout JavaScript Wyre data API",
      points: [
        "As a team, we have built a user interface that locates restaurants in specific areas for tourists in new sorroundings and are looking to find restaurants around them.",
        "Restaurants names,location,contacts and star ratings will be displayed based on users's input.",
        "The user interfarce has been designed to have a polished looking UI using Tailwind to add both HTML and CSS to style the page. ",
        "The UI was created in hopes of making it easier for travellers/tourists to find restaurants closest to them as well as giving them an option to save their search through local storage."
      ],
      link: "https://github.com/Ze7Hu/Restaurant-Finder-App",
      live: "https://ze7hu.github.io/Restaurant-Finder-App/",
      image: restaurant,
    },
    {
      title: " Password Generator",
      tech: "HTMl CSS JavaScript",
      points: [
        "Modifying starter code to create an application that enables employees to genrate random passwords. The generate password button will activate a number of prompts when clicked.",
        "Prompts will inform the users about the required password standard e.g. length and character types. Should the users input be invalid, an alert will pop up clarifying the reason why and request the user to start over.",
        "Once all prompts are addressed and the chosen password matches the required standard, the password will be displayed on the page.",
      ],
      link: "https://github.com/Ze7Hu/Password-Generator",
      live: "https://ze7hu.github.io/Restaurant-Finder-App/",
      image: passwordgen,
    },
    {
      title: "Horriseon-refactoing",
      tech: "HTML -CSS",
      points: [
        "Refactored an existing marketing agency website to use HTML semantic elements.",
        "CSS refctored to remove duplicate style definitions -Fixed navigation links and improved the accecibility of images."

      ],
      link: "https://github.com/Ze7Hu/Horriseon-refactoring",
      live: "https://ze7hu.github.io/Restaurant-Finder-App/",
      image: horrison,
    },
    {
      title: "SQL: Employee Tracker",
      tech: "Nodejs Inquirer MySQL Screencastify",
      points: [
        "Developers have to frequently create interfaces that allow non-developers to easily view and interact with information stored in databases.",
        "This commandline allow businness owners to view and manage the departments, roles and eployees in their company so that they can better organise and plan their business.",
      ],
      link: "https://github.com/Ze7Hu/Employee-Tracker",
      live: "https://ze7hu.github.io/Restaurant-Finder-App/",
      image: employee,
    },
    {
      title: "SocioSinergy",
      tech: "JavaScript Handlebars HTML CSS Boostrap Node.js Express.js MySQL Sequelize",
      points: [
        "Designed for individuals to connect and share their thoughts, ideas, and experiences with the world.",
        "This social media platform includes features like allowing users to sign up, edit their profile, update a profile picture, create, edit, comment and delete posts.",
        "It also allows send direct messages to other users,a among other characteristics.",
        "Our user story is to provide a simple and easy-to-use platform that allows people to express themselves and connect with others on a global scale.",
      ],
      link: "https://github.com/Ze7Hu/SocioSynergy",
      live: "https://sociosynergy1.herokuapp.com/",
      image: sociosynergy,
    },
    {
      title: "Express.js: Note Taker",
      tech: "JavaScript Node.js Express.js Npm modules",
      points: [
        "Note Taker application allows users to write, save and delete notes so that they can organise their work and keep track of the tasks that they have conpleted.",
        "When the user will open this application, they will be presented with a page whereby when they write their notes, a save icon will then appear on the right-hand side which will allow them to save their input.",
        "Saved notes will appear on the left-hand side along side a delete icon, which users can click on to delete their notes when needed."
      ],
      link: "https://github.com/Ze7Hu/Note-Taker-App",
      live: "https://note-taker-appl.herokuapp.com/",
      image: note,
    },
  ];
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {  experiences, projects };
