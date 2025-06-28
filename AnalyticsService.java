package com.siddhant.portfolio.service;

import com.siddhant.portfolio.dto.AnalyticsDto;
import com.siddhant.portfolio.model.ProjectView;
import com.siddhant.portfolio.repository.ContactMessageRepository;
import com.siddhant.portfolio.repository.ProjectViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnalyticsService {
    
    @Autowired
    private ContactMessageRepository contactMessageRepository;
    
    @Autowired
    private ProjectViewRepository projectViewRepository;
    
    public ProjectView recordProjectView(String projectName, String visitorIp, String userAgent) {
        ProjectView view = new ProjectView(projectName, visitorIp, userAgent);
        return projectViewRepository.save(view);
    }
    
    public AnalyticsDto getAnalytics() {
        AnalyticsDto analytics = new AnalyticsDto();
        
        // Get current month start
        LocalDateTime monthStart = LocalDateTime.now().withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0);
        
        // Contact message analytics
        analytics.setTotalMessages(contactMessageRepository.count());
        analytics.setUnreadMessages(contactMessageRepository.countUnreadMessages());
        analytics.setMessagesThisMonth(contactMessageRepository.countMessagesAfter(monthStart));
        
        // Project view analytics
        analytics.setTotalProjectViews(projectViewRepository.count());
        analytics.setUniqueVisitors(projectViewRepository.countUniqueVisitorsAfter(monthStart));
        analytics.setViewsThisMonth(projectViewRepository.countViewsAfter(monthStart));
        
        // Project view counts
        Map<String, Long> projectViews = new HashMap<>();
        List<Object[]> viewCounts = projectViewRepository.findMostViewedProjects();
        for (Object[] row : viewCounts) {
            projectViews.put((String) row[0], (Long) row[1]);
        }
        analytics.setProjectViewCounts(projectViews);
        
        return analytics;
    }
    
    public Long getProjectViewCount(String projectName) {
        return projectViewRepository.countViewsByProjectName(projectName);
    }
}

