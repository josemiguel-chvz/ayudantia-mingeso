package com.example.calculadora.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculadoraController {

    @GetMapping("/sum")
    public ResponseEntity<Integer> sum(@RequestParam("first_operator") Integer first_operator, @RequestParam("second_operator") Integer second_operator){
        Integer result = first_operator + second_operator;
        return ResponseEntity.ok().body(result);
    }
}
