package com.siddhant.portfolio.service;

import com.siddhant.portfolio.model.ContactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${portfolio.admin.email:siddhantjadhav.dev@gmail.com}")
    private String adminEmail;
    
    @Value("${portfolio.from.email:noreply@portfolio.com}")
    private String fromEmail;
    
    public void sendContactNotification(ContactMessage message) {
        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setFrom(fromEmail);
            email.setTo(adminEmail);
            email.setSubject("New Portfolio Contact: " + message.getSubject());
            
            String body = String.format(
                "New contact message received:\n\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Subject: %s\n\n" +
                "Message:\n%s\n\n" +
                "Received at: %s",
                message.getName(),
                message.getEmail(),
                message.getSubject(),
                message.getMessage(),
                message.getCreatedAt()
            );
            
            email.setText(body);
            mailSender.send(email);
            
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email notification", e);
        }
    }
    
    public void sendAutoReply(ContactMessage message) {
        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setFrom(fromEmail);
            email.setTo(message.getEmail());
            email.setSubject("Thank you for contacting Siddhant Jadhav");
            
            String body = String.format(
                "Hi %s,\n\n" +
                "Thank you for reaching out! I've received your message about \"%s\" and will get back to you as soon as possible.\n\n" +
                "Best regards,\n" +
                "Siddhant Jadhav\n" +
                "Full-Stack Developer & UI/UX Lead\n\n" +
                "---\n" +
                "This is an automated response. Please do not reply to this email.",
                message.getName(),
                message.getSubject()
            );
            
            email.setText(body);
            mailSender.send(email);
            
        } catch (Exception e) {
            throw new RuntimeException("Failed to send auto-reply email", e);
        }
    }
}

