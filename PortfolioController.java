package com.siddhant.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {
    
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        response.put("service", "Portfolio Backend API");
        response.put("version", "1.0.0");
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile() {
        Map<String, Object> profile = new HashMap<>();
        
        // Basic Information
        profile.put("name", "Siddhant Jadhav");
        profile.put("title", "Full-Stack Developer & UI/UX Lead");
        profile.put("email", "siddhantjadhav.dev@gmail.com");
        profile.put("phone", "+91 8291061982");
        profile.put("location", "Mumbai, Maharashtra, India");
        
        // Education
        Map<String, Object> education = new HashMap<>();
        education.put("degree", "Bachelor of Engineering in Computer Engineering");
        education.put("institution", "Father Conceicao Rodrigues College Of Engineering");
        education.put("location", "Mumbai");
        education.put("duration", "June 2022 - May 2026");
        profile.put("education", education);
        
        // Experience
        Map<String, Object> experience = new HashMap<>();
        experience.put("currentRole", "UI/UX Lead at Google Developer Student Clubs");
        experience.put("previousRole", "UI/UX Junior Associate at Google Developer Student Clubs");
        experience.put("hackathonWins", 6);
        profile.put("experience", experience);
        
        // Skills
        Map<String, Object> skills = new HashMap<>();
        skills.put("languages", new String[]{"Java", "JavaScript", "TypeScript", "Python", "C++", "SQL"});
        skills.put("frontend", new String[]{"React.js", "Next.js", "HTML", "CSS", "TailwindCSS", "Material-UI", "Bootstrap"});
        skills.put("backend", new String[]{"Node.js", "Express.js", "Django", "Spring Boot"});
        skills.put("databases", new String[]{"MongoDB", "Firebase", "MySQL", "PostgreSQL"});
        skills.put("tools", new String[]{"Git", "GitHub", "Figma", "Postman", "Docker"});
        skills.put("blockchain", new String[]{"Solidity", "IPFS", "Web3.js", "Aptos Blockchain"});
        profile.put("skills", skills);
        
        return ResponseEntity.ok(profile);
    }
    
    @GetMapping("/projects")
    public ResponseEntity<Map<String, Object>> getProjects() {
        Map<String, Object> response = new HashMap<>();
        
        // Featured Projects
        Map<String, Object>[] projects = new Map[3];
        
        // Tree-Transparency
        projects[0] = new HashMap<>();
        projects[0].put("name", "Tree-Transparency");
        projects[0].put("description", "Blockchain-enabled tree plantation tracking platform");
        projects[0].put("technologies", new String[]{"React.js", "JavaScript", "Tailwind CSS", "Firebase", "Solidity", "IoT"});
        projects[0].put("category", "Blockchain & IoT");
        projects[0].put("features", new String[]{"Blockchain transparency", "IoT monitoring", "Real-time analytics", "Species selection algorithms"});
        
        // DocCrypt
        projects[1] = new HashMap<>();
        projects[1].put("name", "DocCrypt");
        projects[1].put("description", "Secure document collaboration platform with AI chatbot");
        projects[1].put("technologies", new String[]{"React.js", "Tailwind CSS", "IPFS", "Aptos Blockchain", "NLP", "Cryptography"});
        projects[1].put("category", "Blockchain & AI");
        projects[1].put("features", new String[]{"Decentralized storage", "AI-powered chatbot", "Cryptographic signatures", "Immutable audit trails"});
        
        // Unplug Event Website
        projects[2] = new HashMap<>();
        projects[2].put("name", "Unplug - GDSC Event Website");
        projects[2].put("description", "Event platform for startup launchpad hosted by GDSC");
        projects[2].put("technologies", new String[]{"Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Vercel"});
        projects[2].put("category", "Web Development");
        projects[2].put("features", new String[]{"Event registration", "Speaker showcase", "Real-time updates", "Professional branding"});
        
        response.put("projects", projects);
        response.put("totalProjects", 3);
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/hackathons")
    public ResponseEntity<Map<String, Object>> getHackathons() {
        Map<String, Object> response = new HashMap<>();
        
        // Hackathon Wins
        Map<String, Object>[] hackathons = new Map[6];
        
        hackathons[0] = createHackathon("KJ Somaiya College Hackathon", "1st Place", "March 2024", "Blockchain Innovation", 200);
        hackathons[1] = createHackathon("Atharva College Tech Fest", "Winner", "February 2024", "Web Development", 150);
        hackathons[2] = createHackathon("S.I.W.S Innovation Challenge", "2nd Place", "January 2024", "Social Impact", 500);
        hackathons[3] = createHackathon("Vidyalankar College CodeFest", "1st Place", "November 2023", "FinTech", 180);
        hackathons[4] = createHackathon("V-HACK 2023", "Winner", "September 2023", "UI/UX Innovation", 120);
        hackathons[5] = createHackathon("HACKDECK 2024", "1st Place", "August 2023", "Open Innovation", 300);
        
        response.put("hackathons", hackathons);
        response.put("totalWins", 6);
        response.put("totalParticipants", 1450);
        
        return ResponseEntity.ok(response);
    }
    
    private Map<String, Object> createHackathon(String name, String position, String date, String category, int participants) {
        Map<String, Object> hackathon = new HashMap<>();
        hackathon.put("name", name);
        hackathon.put("position", position);
        hackathon.put("date", date);
        hackathon.put("category", category);
        hackathon.put("participants", participants);
        return hackathon;
    }
}

