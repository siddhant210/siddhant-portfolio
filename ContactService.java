package com.siddhant.portfolio.service;

import com.siddhant.portfolio.dto.ContactMessageDto;
import com.siddhant.portfolio.model.ContactMessage;
import com.siddhant.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ContactService {
    
    @Autowired
    private ContactMessageRepository contactMessageRepository;
    
    @Autowired
    private EmailService emailService;
    
    public ContactMessage saveContactMessage(ContactMessageDto dto) {
        ContactMessage message = new ContactMessage(
            dto.getName(),
            dto.getEmail(),
            dto.getSubject(),
            dto.getMessage()
        );
        
        ContactMessage savedMessage = contactMessageRepository.save(message);
        
        // Send notification email (optional)
        try {
            emailService.sendContactNotification(savedMessage);
        } catch (Exception e) {
            // Log error but don't fail the request
            System.err.println("Failed to send email notification: " + e.getMessage());
        }
        
        return savedMessage;
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAllByOrderByCreatedAtDesc();
    }
    
    public List<ContactMessage> getUnreadMessages() {
        return contactMessageRepository.findByIsReadOrderByCreatedAtDesc(false);
    }
    
    public ContactMessage markAsRead(Long messageId) {
        ContactMessage message = contactMessageRepository.findById(messageId)
            .orElseThrow(() -> new RuntimeException("Message not found"));
        message.setIsRead(true);
        return contactMessageRepository.save(message);
    }
    
    public Long getUnreadCount() {
        return contactMessageRepository.countUnreadMessages();
    }
    
    public Long getMessagesCountAfter(LocalDateTime date) {
        return contactMessageRepository.countMessagesAfter(date);
    }
}

