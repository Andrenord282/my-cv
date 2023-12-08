export interface Data {
    header: Header;
    body: Body;
}

export interface Header {
    photo: string;
    firstName: string;
    lastName: string;
    position: string;
}

export interface Body {
    "about-me": AboutMe;
    experience: Experience;
    "personal-projects": PersonalProjects;
    contacts: Contacts;
    skills: Skills;
    education: Education;
}

export interface AboutMe {
    title: string;
    text: string;
}

export interface Experience {
    title: string;
    list: ExperienceList[];
}

export interface ExperienceList {
    position: string;
    company: string;
    "company-link": string;
    years: string;
    responsibilities: string[];
}

export interface PersonalProjects {
    title: string;
    list: PersonalProjectsList[];
}

export interface PersonalProjectsList {
    title: string;
    links: string[];
    descr: string[];
}

export interface Contacts {
    title: string;
    list: ContactsList[];
}

export interface ContactsList {
    name: string;
    icon: string;
    text: string;
    link?: string;
}

export interface Skills {
    title: string;
    list: string[];
}

export interface Education {
    title: string;
    list: EducationList[];
}

export interface EducationList {
    name: string;
    years: string;
    faculty: string;
}
