import React from "react";
import { Trophy, Users, BookOpen, Award } from "lucide-react";
import mamochaImg from "../assets/mamochaproject.png";
import cipherxImg from "../assets/chiper.png";
import androidImg from "../assets/androidproject.png";
import autopsyImg from "../assets/autopsy.png";
import wumpusImg from "../assets/wumpus.jpeg";
import top10Img from "../assets/ten.png";
import innovationImg from "../assets/ino.png";
import visualSlidesImg from "../assets/ppt.png";
import semifinalImg from "../assets/semifinal.jpeg";

export const NAV_LINKS = ["About", "Skills", "Projects", "Certificates", "Contact"];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++"],
  },
  {
    title: "Frameworks & Databases",
    skills: ["Laravel", "MySQL"],
  },
  {
    title: "Cybersecurity & Forensics Tools",
    skills: ["Linux", "Wireshark", "Burp Suite", "Autopsy", "NetworkMiner", "FTK Imager"],
  },
];

export const CORE_SKILLS = SKILL_CATEGORIES.flatMap((cat) => cat.skills);


export const SkillIcons: Record<string, React.ReactNode> = {
  Laravel: (
    <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M49.626 11.564a.809.809 0 01.028.209v10.972a.8.8 0 01-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 01-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.399 39.944A.801.801 0 010 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.02-.02.047-.033.071-.05.027-.02.051-.044.082-.06h.002L9.829.568a.802.802 0 01.801 0l9.542 5.5h.002c.03.017.055.04.083.06.023.017.05.03.07.05.028.028.048.06.072.092.017.024.04.046.054.072.023.038.036.082.052.124.008.023.021.044.028.067a.81.81 0 01.027.209v20.559l8.008-4.611v-10.51a.8.8 0 01.028-.21c.007-.022.02-.043.028-.066.016-.042.03-.085.052-.124.014-.026.037-.047.054-.071.024-.032.044-.065.072-.093.02-.02.047-.033.07-.05.028-.02.052-.044.083-.06h.001l9.543-5.5a.802.802 0 01.8 0l9.543 5.5c.032.017.056.04.084.06.023.017.05.03.07.05.028.028.048.06.071.092.018.025.04.046.055.072.023.038.036.082.051.124.009.023.022.044.029.067zm-1.574 10.636V12.87l-3.363 1.937-4.646 2.675v9.329l8.01-4.611zm-9.543 16.39V29.26l-4.57 2.61-12.98 7.418v9.403l17.55-10.101zM1.602 7.719v31.068L19.15 48.689v-9.4l-9.2-5.2-.003-.002-.004-.002c-.029-.017-.053-.04-.08-.058-.024-.02-.05-.034-.072-.054l-.003-.003c-.025-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.031-.066-.044-.1-.016-.032-.033-.063-.043-.098v-.002c-.011-.038-.016-.078-.022-.118-.005-.032-.015-.063-.016-.096V12.33L5.965 9.654l-3.363-1.936zm8.628-5.554L2.222 6.334l8.008 4.613 8.008-4.614-8.008-4.168zm4.163 29.16l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.932l3.363-1.937zM39.243 7.164l-8.008 4.168 8.008 4.614 8.006-4.614-8.006-4.168zm-.801 9.934l-4.645-2.675-3.363-1.936v9.329l4.645 2.674 3.363 1.937v-9.33zm-17.55 18.795L29.6 30.7l3.882-2.218-8.003-4.609-3.363 1.937-4.646 2.675 3.421 1.932z" fill="#FF2D20" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M23.744 0c-1.246.004-2.436.108-3.516.283-3.186.518-3.763 1.6-3.763 3.596v2.636h7.527v.879H14.18c-2.187 0-4.103 1.315-4.702 3.816-.692 2.868-.722 4.658 0 7.653.535 2.226 1.814 3.816 4.001 3.816h2.59v-3.44c0-2.483 2.148-4.672 4.702-4.672h7.518c2.093 0 3.763-1.724 3.763-3.829V3.879c0-2.042-1.722-3.576-3.763-3.596C26.97.152 25.65.032 24.432.024 24.198.022 23.97-.001 23.744 0zm-4.07 2.305a1.433 1.433 0 011.437 1.439 1.438 1.438 0 01-1.437 1.44 1.44 1.44 0 01-1.438-1.44c0-.796.642-1.44 1.438-1.44z" fill="#3572A5" />
      <path d="M32.77 7.394v3.34c0 2.588-2.195 4.773-4.702 4.773h-7.518c-2.06 0-3.763 1.762-3.763 3.829v7.179c0 2.042 1.775 3.241 3.763 3.829 2.382.703 4.666.831 7.518 0 1.895-.553 3.764-1.664 3.764-3.829v-2.87h-7.519v-.879h11.282c2.187 0 3.002-1.525 3.763-3.816.787-2.36.753-4.63 0-7.653-.541-2.175-1.574-3.816-3.763-3.816H32.77v-.087zm-4.297 15.42a1.44 1.44 0 011.437 1.44 1.438 1.438 0 01-1.437 1.44 1.434 1.434 0 01-1.437-1.44c0-.796.643-1.44 1.437-1.44z" fill="#FFC331" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M17.7 29.9s-1.8 1.1 1.3 1.4c3.7.4 5.6.4 9.7-.4 0 0 1.1.7 2.5 1.2-8.9 3.8-20.1-.2-13.5-2.2zm-1.1-5.1s-2 1.5 1.1 1.8c4 .4 7.1.5 12.5-.6 0 0 .7.8 1.9 1.2-10.8 3.1-22.8.3-15.5-2.4z" fill="#5382A1" />
      <path d="M26.5 19.3c2.2 2.5-.6 4.8-.6 4.8s5.6-2.9 3-6.5c-2.4-3.4-4.3-5 5.8-10.8 0 0-15.8 3.9-8.2 12.5z" fill="#E76F00" />
      <path d="M37.6 33s1.3 1.1-1.5 2c-5.2 1.6-21.6 2-26.2 0-1.6-.7 1.5-1.7 2.5-1.9 1.1-.2 1.7-.2 1.7-.2-1.9-1.4-12.6 2.7-5.4 3.8 19.5 3.1 35.6-1.4 28.9-3.7zM18.5 21.7s-9 2.1-3.2 2.9c2.4.3 7.3.3 11.8-.1 3.7-.3 7.4-1.1 7.4-1.1s-1.3.6-2.2 1.2c-9.1 2.4-26.6 1.3-21.5-1.2 4.3-2 7.7-1.7 7.7-1.7zM33 28.2c9.2-4.8 4.9-9.4 2-8.8-.7.1-1.1.3-1.1.3s.3-.4.8-.6c5.8-2 10.2 6.1-1.9 9.3 0 0 .1-.1.2-.2z" fill="#5382A1" />
      <path d="M29.3 0s5.1 5.1-4.8 12.9c-8 6.3-1.8 9.8 0 13.9-4.7-4.2-8.1-7.9-5.8-11.4C22 10.6 31.1 8.2 29.3 0z" fill="#E76F00" />
      <path d="M19 44.4c8.8.6 22.3-.3 22.7-4.4 0 0-.6 1.6-7.3 2.8-7.6 1.4-16.9 1.2-22.4.3 0 .1 1.1.9 7 1.3z" fill="#5382A1" />
    </svg>
  ),
  "C++": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18c7.5 0 14-4.6 16.7-11.2l-9.2-5.3c-.8 2.6-3.2 4.5-6 4.5-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5c2.2 0 4.2 1.1 5.4 2.9l9-5.5C36.9 9.8 30.8 6 24 6z" fill="#00599C" />
      <path d="M36 20h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill="white" />
      <path d="M44 20h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill="white" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M2 36.5l4.3-1c.7-.2 1.1-.1 1.5.5.9 1.4 1.8 2.5 3.3 3.3 2 1 4.1 1.1 6.3.5 2.5-.7 3.9-2.5 4-4.5.1-2.2-1.1-3.9-3.8-4.7-2-.6-4.1-1-6.1-1.8-3.5-1.4-5.5-3.8-5.6-7.6-.2-4.5 2-7.6 5.8-9.5 3.4-1.7 7-1.8 10.6-.7 3.3 1 5.5 3.2 6.6 6.4.2.5.1.8-.5 1l-4 1c-.5.2-.8.1-1-.5-.6-1.5-1.6-2.6-3.1-3.2-2.6-1-5-.9-7.1.7-1.7 1.2-2 3.3-.8 5.1.8 1.2 2.1 1.8 3.5 2.3 2 .6 4.1 1 6.1 1.7 1.6.6 3.1 1.4 4.2 2.8 2.3 2.7 2.4 5.8 1.2 9-1.5 3.8-4.5 6-8.4 6.9-3.4.8-6.7.6-9.8-.9-3.3-1.6-5.5-4.1-6.6-7.6-.2-.3 0-.5.4-.7z" fill="#00758F" />
      <path d="M35.4 42.2c-1.6-3.1-2.9-6-3.2-9.3-.2-2.5-.1-5 1-7.3 1.4-2.9 3.9-4.1 7-3.9 2.7.1 4.8 1.5 6.4 3.8.2.3.2.5-.2.7l-3 1.5c-.4.2-.6.1-.9-.2-.7-1.1-1.6-1.9-3-2.1-2-.3-3.7.7-4.2 2.6-.6 2.1-.6 4.2.1 6.3.5 1.4 1.3 2.8 2 4.3l-2 3.6z" fill="#F29111" />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M24 2C20.5 2 18 6.5 18 12c0 3 .7 5.7 1.7 7.7L16 25l-4.5 2c-2 1-3.5 2.5-3.5 4.5 0 1.5.7 3 2 4l-1 2c-.5 1-.5 2 0 3s1.5 1.5 2.5 1.5H37c1 0 2-.5 2.5-1.5s.5-2 0-3l-1-2c1.3-1 2-2.5 2-4 0-2-1.5-3.5-3.5-4.5L32.5 25l-3.7-5.3c1-2 1.7-4.7 1.7-7.7 0-5.5-2.5-10-6.5-10z" fill="#333" />
      <path d="M24 4c-2.5 0-4.5 4-4.5 9.5 0 3 .8 5.5 1.8 7l2.7 4 2.7-4c1-1.5 1.8-4 1.8-7C28.5 8 26.5 4 24 4z" fill="#F5C300" />
      <circle cx="22" cy="10" r="1.5" fill="#333" />
      <circle cx="26" cy="10" r="1.5" fill="#333" />
      <path d="M22.5 13c0 0 .5 1 1.5 1s1.5-1 1.5-1" stroke="#333" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14 32c0 1.5 1 3 3 3.5h14c2-.5 3-2 3-3.5 0-1.5-1-3-3-3.5l-4-2-3 3-3-3-4 2c-2 .5-3 2-3 3.5z" fill="#E8E8E8" />
    </svg>
  ),
  "Burp Suite": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <circle cx="24" cy="24" r="20" fill="#FF6633" />
      <path d="M15 16h18c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3z" fill="white" fillOpacity="0.9" />
      <path d="M18 20h4v3h-4zm5 0h4v3h-4zm5 0h4v3h-4zM18 25h4v3h-4zm5 0h4v3h-4zm5 0h4v3h-4z" fill="#FF6633" fillOpacity="0.6" />
    </svg>
  ),
  Wireshark: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <circle cx="24" cy="24" r="20" fill="#3B6EA5" />
      <path d="M12 24c2-4 4-6 6-4s3 8 6 4 4-10 6-6 3 8 6 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M17 15l2 3M31 15l-2 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="34" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M24 31v-3" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  NetworkMiner: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#2D5F2D" />
      <circle cx="24" cy="18" r="4" fill="white" fillOpacity="0.9" />
      <circle cx="14" cy="32" r="3" fill="white" fillOpacity="0.9" />
      <circle cx="34" cy="32" r="3" fill="white" fillOpacity="0.9" />
      <line x1="24" y1="22" x2="14" y2="29" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="24" y1="22" x2="34" y2="29" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M18 38l6-8 6 8" stroke="#90EE90" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  Autopsy: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#1A1A2E" />
      <circle cx="22" cy="22" r="8" stroke="#00D4FF" strokeWidth="2" fill="none" />
      <line x1="28" y1="28" x2="36" y2="36" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 22h6M22 19v6" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "FTK Imager": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#0C4A6E" />
      <rect x="14" y="12" width="20" height="24" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M14 18h20" stroke="white" strokeWidth="1.5" />
      <circle cx="24" cy="28" r="5" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
      <path d="M24 25v6M21 28h6" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />
      <circle cx="18" cy="15" r="1" fill="#38BDF8" />
      <circle cx="21" cy="15" r="1" fill="#38BDF8" />
      <circle cx="24" cy="15" r="1" fill="#38BDF8" />
    </svg>
  ),
};

export const PROJECTS = [
  {
    title: "SRM Cyber Audit Dashboard",
    desc: "Developed a web-based Security Risk Management (SRM) dashboard that enables organizations to manage cybersecurity audits, vulnerability assessments, organizational assets, compliance tracking, evidence collection, audit findings, and AI-powered security recommendations through a centralized platform.",
    tags: ["PHP", "MySQL", "Bootstrap", "Cybersecurity"],
    image: mamochaImg,
    category: "Cybersecurity",
  },
  {
    title: "CipherX Secure File Encryption System",
    desc: "Built a client-side secure file encryption platform implementing hybrid cryptography with AES-256-GCM, RSA-OAEP, SHA-256 hashing, HMAC integrity verification, and LSB steganography. The system securely encrypts sensitive files, protects cryptographic keys, performs multi-layer authentication, and ensures confidentiality and data integrity without relying on any backend server.",
    tags: ["AES-256", "RSA", "Web Crypto API", "JavaScript"],
    image: cipherxImg,
    category: "Cybersecurity",
  },
  {
    title: "MyClinic - Healthcare Mobile Application",
    desc: "Developed a native Android healthcare application that allows users to search for doctors, browse medical specialties, and access healthcare services through a clean and intuitive mobile interface.",
    tags: ["Java", "Android Studio", "XML", "SQLite"],
    image: androidImg,
    category: "Mobile Development",
  },
  {
    title: "Digital Forensics Investigation Using Autopsy",
    desc: "Conducted a digital forensic investigation on a simulated cybercrime case using Autopsy and FTK Imager. The project focused on collecting, preserving, examining, and analyzing digital evidence to reconstruct incidents and produce comprehensive forensic findings.",
    tags: ["Autopsy", "FTK Imager", "Digital Forensics", "Disk Analysis"],
    image: autopsyImg,
    category: "Digital Forensics",
  },
  {
    title: "Wumpus World Intelligent Agent Simulator",
    desc: "Developed an intelligent agent simulation based on the Wumpus World environment using Knowledge-Based Artificial Intelligence. The system enables an autonomous agent to perceive its surroundings, infer hidden dangers through logical reasoning, make optimal decisions, eliminate threats, and safely navigate toward its objective without prior knowledge of the environment.",
    tags: ["Artificial Intelligence", "Knowledge-Based System", "JavaScript", "Logic Inference"],
    image: wumpusImg,
    category: "Artificial Intelligence",
  },
];

export const CERTIFICATES = [
  {
    name: "Top 10 Finalist",
    issuer: "International Essay Competition & English Camp (ICEC) Thailand 2026",
    image: top10Img,
    color: "#D4AF37",
  },
  {
    name: "Best Innovation Award",
    issuer: "International Essay Competition & English Camp (ICEC) Thailand 2026",
    image: innovationImg,
    color: "#D4AF37",
  },
  {
    name: "Best Visual Slides Award",
    issuer: "International Essay Competition & English Camp (ICEC) Thailand 2026",
    image: visualSlidesImg,
    color: "#D4AF37",
  },
  {
    name: "Semifinalist",
    issuer: "Jakarta Business Case Competition (JBCC) 2025",
    image: semifinalImg,
    color: "#2E8B57",
  },
];

export const TYPE_COLORS: Record<string, string> = {
  competition: "#D4AF37",
  organization: "#0F172A",
  academic: "#64748B",
  learning: "#D4AF37",
};
