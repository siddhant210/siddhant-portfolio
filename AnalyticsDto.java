package com.siddhant.portfolio.dto;

import java.util.Map;

public class AnalyticsDto {
    
    private Long totalMessages;
    private Long unreadMessages;
    private Long totalProjectViews;
    private Long uniqueVisitors;
    private Map<String, Long> projectViewCounts;
    private Long messagesThisMonth;
    private Long viewsThisMonth;
    
    // Constructors
    public AnalyticsDto() {}
    
    // Getters and Setters
    public Long getTotalMessages() {
        return totalMessages;
    }
    
    public void setTotalMessages(Long totalMessages) {
        this.totalMessages = totalMessages;
    }
    
    public Long getUnreadMessages() {
        return unreadMessages;
    }
    
    public void setUnreadMessages(Long unreadMessages) {
        this.unreadMessages = unreadMessages;
    }
    
    public Long getTotalProjectViews() {
        return totalProjectViews;
    }
    
    public void setTotalProjectViews(Long totalProjectViews) {
        this.totalProjectViews = totalProjectViews;
    }
    
    public Long getUniqueVisitors() {
        return uniqueVisitors;
    }
    
    public void setUniqueVisitors(Long uniqueVisitors) {
        this.uniqueVisitors = uniqueVisitors;
    }
    
    public Map<String, Long> getProjectViewCounts() {
        return projectViewCounts;
    }
    
    public void setProjectViewCounts(Map<String, Long> projectViewCounts) {
        this.projectViewCounts = projectViewCounts;
    }
    
    public Long getMessagesThisMonth() {
        return messagesThisMonth;
    }
    
    public void setMessagesThisMonth(Long messagesThisMonth) {
        this.messagesThisMonth = messagesThisMonth;
    }
    
    public Long getViewsThisMonth() {
        return viewsThisMonth;
    }
    
    public void setViewsThisMonth(Long viewsThisMonth) {
        this.viewsThisMonth = viewsThisMonth;
    }
}

