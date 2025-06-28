package com.siddhant.portfolio.repository;

import com.siddhant.portfolio.model.ProjectView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ProjectViewRepository extends JpaRepository<ProjectView, Long> {
    
    @Query("SELECT COUNT(p) FROM ProjectView p WHERE p.projectName = :projectName")
    Long countViewsByProjectName(String projectName);
    
    @Query("SELECT p.projectName, COUNT(p) FROM ProjectView p GROUP BY p.projectName ORDER BY COUNT(p) DESC")
    List<Object[]> findMostViewedProjects();
    
    @Query("SELECT COUNT(p) FROM ProjectView p WHERE p.viewedAt >= :startDate")
    Long countViewsAfter(LocalDateTime startDate);
    
    @Query("SELECT COUNT(DISTINCT p.visitorIp) FROM ProjectView p WHERE p.viewedAt >= :startDate")
    Long countUniqueVisitorsAfter(LocalDateTime startDate);
}

