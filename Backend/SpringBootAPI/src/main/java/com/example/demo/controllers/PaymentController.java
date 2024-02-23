package com.example.demo.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @PostMapping("/process")
    public String processPayment() {
        // Add your payment processing logic here
        // For simplicity, let's assume the payment is successful
        return "Payment Successful";
    }

}
