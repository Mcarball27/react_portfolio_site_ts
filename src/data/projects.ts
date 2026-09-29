// -----------------------------------------------------------------------------
// projects.ts — single source of truth for project data.
// Author: Maria Martina Carballo Diaz
//
// This file has no JSX and no React imports on purpose: it's just a typed
// array of plain objects. Both the /projects listing page and the
// /projects/:id detail page import from here, so adding a project or fixing
// a typo happens in exactly one place.
//
// The `.ts` extension (not `.tsx`) signals to TypeScript that there's no
// JSX inside. If you ever add a React element to this file, rename it to
// `.tsx` — otherwise the compiler will refuse to parse the angle brackets.
// -----------------------------------------------------------------------------
import studentGradesImage from '../assets/student_grade.jpeg';
import flightSchoolImage from '../assets/flight_school.jpeg';
import restaurantImage from '../assets/restaurant_image.jpg';

// Shape of one project entry. Grouping the list-card fields (image, role,
// outcome) together with the detail-page fields (description, techStack,
// timeline) into one type means the listing and detail views can't get
// out of sync — both read from the same object.
export type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  role: string;
  outcome: string;
  // Detail-only fields:
  description: string[];
  techStack: string[];
  timeline: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
   {
    id: 'student-grades',
    title: 'Student Grades Application',
    image: studentGradesImage,
    imageAlt: 'Illustration representing the Student Grades application',
    role: 'C# Developer',
    outcome:
      'Created a working desktop application that calculates student averages and displays PASS or FAIL results based on entered grades.',
    description: [
      'The Student Grades application is a desktop project built with C# and WPF. It allows a user to enter a student name and three grades, calculate the average, and display the final result.',
      'I created the user interface and implemented the application logic, including user input handling, grade calculations, validation, and PASS or FAIL output.',
      'This project helped me strengthen my understanding of C#, event-driven programming, WPF controls, and building simple applications with a graphical user interface.'
    ],
    techStack: ['C#', 'WPF', 'Visual Studio'],
    timeline: '2026'
  },
   {
    id: 'flight-school-management',
    title: 'Flight School Training & Operations Management System',
    image: flightSchoolImage,
    imageAlt: 'Flight school management project illustration',
    role: 'Systems Analyst & Designer',
    outcome:
      'Designed the requirements and system structure for a centralized flight school management solution covering training, scheduling, aircraft maintenance, and billing.',
    description: [
      'This project focuses on designing a software system for managing the daily operations of a flight school.',
      'The system is intended to support students, instructors, administrators, and maintenance personnel through features such as lesson scheduling, student management, training progress, aircraft maintenance, and billing.',
      'My work includes requirements analysis, stakeholder identification, domain classes, system documentation, and data-flow modeling to define how the different parts of the system interact.'
    ],
    techStack: ['Systems Analysis', 'UML', 'Data Flow Diagrams', 'Visual Paradigm'],
    timeline: '2026'
  },
  {
  id: 'oliva-terra',
  title: 'Oliva Terra Mediterranean restaurant website',
  image: restaurantImage,
  imageAlt: 'Oliva Terra Mediterranean restaurant website',
  role: 'Front-End Developer',
  outcome:
    'Built a multi-page restaurant website that combined interactive JavaScript features with a responsive HTML and CSS interface.',
  description: [
    'Oliva Terra is a fictional Mediterranean restaurant website that I developed across multiple assignments for COMP125.',
    'The project includes multiple connected pages and interactive features built with HTML, CSS, and JavaScript, including navigation, ordering functionality, location information, a weather display, and a food-order dashboard.',
    'This project helped me strengthen my JavaScript skills and gave me experience combining several web features into one consistent website.'
  ],
  techStack: ['HTML', 'CSS', 'JavaScript'],
  timeline: '2026'
}
];
