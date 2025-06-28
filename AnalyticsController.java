package com.siddhant.portfolio.controller;

import com.siddhant.portfolio.dto.AnalyticsDto;
import com.siddhant.portfolio.model.ProjectView;
import com.siddhant.portfolio.service.AnalyticsService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "*")
public class AnalyticsController {
    
    @Autowired
    private AnalyticsService analyticsService;
    
    @PostMapping("/project-view")
    public ResponseEntity<Map<String, Object>> recordProjectView(
            @RequestParam String projectName,
            HttpServletRequest request) {
        
        try {
            String visitorIp = getClientIpAddress(request);
            String userAgent = request.getHeader("User-Agent");
            
            ProjectView view = analyticsService.recordProjectView(projectName, visitorIp, userAgent);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("viewId", view.getId());
            response.put("projectName", projectName);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @GetMapping("/dashboard")
    public ResponseEntity<AnalyticsDto> getAnalytics() {
        AnalyticsDto analytics = analyticsService.getAnalytics();
        return ResponseEntity.ok(analytics);
    }
    
    @GetMapping("/project/{projectName}/views")
    public ResponseEntity<Map<String, Long>> getProjectViews(@PathVariable String projectName) {
        Long viewCount = analyticsService.getProjectViewCount(projectName);
        Map<String, Long> response = new HashMap<>();
        response.put("views", viewCount);
        return ResponseEntity.ok(response);
    }
    
    private String getClientIpAddress(HttpServletRequest request) {
        String xForwardedForHeader = request.getHeader("X-Forwarded-For");
        if (xForwardedForHeader == null) {
            return request.getRemoteAddr();
        } else {
            // X-Forwarded-For can contain multiple IPs, the first one is the original client IP
            return xForwardedForHeader.split(",")[0].trim();
        }
    }
}

