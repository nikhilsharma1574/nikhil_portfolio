import { groq } from "next-sanity";
export const experienceQuery= groq`*[_type == 'experience']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const skillsQuery= groq`*[_type == 'skills'] {...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const projectsQuery= groq`*[_type == 'projects']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const achivementsQuery= groq`*[_type == 'achivement']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
export const educationQuery= groq`*[_type == 'education']{...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
// export const teamQuery = groq`*[_type == 'team' && title != null] | order(title desc){...,"mainImage":mainImage.asset->url,"alt":mainImage.alt}`;
// export const noticeQuery = groq`*[_type == "notice"]{_id,title,desc,"attachmentURL" : attachment.asset->url}`;
// export const galleryQuery = groq`*[_type == 'gallery']{...,"mainImage":mainImage[]{'url':asset->url}}`; 