package com.siddhant.portfolio.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "project_views")
public class ProjectView {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "project_name", nullable = false, length = 100)
    private String projectName;
    
    @Column(name = "visitor_ip", length = 45)
    private String visitorIp;
    
    @Column(name = "user_agent", length = 500)
    private String userAgent;
    
    @Column(name = "viewed_at", nullable = false)
    private LocalDateTime viewedAt;
    
    // Constructors
    public ProjectView() {
        this.viewedAt = LocalDateTime.now();
    }
    
    public ProjectView(String projectName, String visitorIp, String userAgent) {
        this();
        this.projectName = projectName;
        this.visitorIp = visitorIp;
        this.userAgent = userAgent;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getProjectName() {
        return projectName;
    }
    
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
    
    public String getVisitorIp() {
        return visitorIp;
    }
    
    public void setVisitorIp(String visitorIp) {
        this.visitorIp = visitorIp;
    }
    
    public String getUserAgent() {
        return userAgent;
    }
    
    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }
    
    public LocalDateTime getViewedAt() {
        return viewedAt;
    }
    
    public void setViewedAt(LocalDateTime viewedAt) {
        this.viewedAt = viewedAt;
    }
}

