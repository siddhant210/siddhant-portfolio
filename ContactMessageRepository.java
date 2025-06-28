package com.siddhant.portfolio.repository;

import com.siddhant.portfolio.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    
    List<ContactMessage> findByIsReadOrderByCreatedAtDesc(Boolean isRead);
    
    List<ContactMessage> findAllByOrderByCreatedAtDesc();
    
    @Query("SELECT COUNT(c) FROM ContactMessage c WHERE c.createdAt >= :startDate")
    Long countMessagesAfter(LocalDateTime startDate);
    
    @Query("SELECT COUNT(c) FROM ContactMessage c WHERE c.isRead = false")
    Long countUnreadMessages();
}

