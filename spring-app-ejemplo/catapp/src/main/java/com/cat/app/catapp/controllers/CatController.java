package com.cat.app.catapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cat.app.catapp.entities.CatEntity;
import com.cat.app.catapp.services.CatService;

@RestController
@RequestMapping("/cats")
public class CatController {

    @Autowired
    CatService catService;

    @GetMapping()
    public ResponseEntity<List<CatEntity>> getAll() {
        List<CatEntity> cats = catService.getAll();
        if (cats.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(cats);
    }

    @GetMapping("/hungry")
    public ResponseEntity<List<CatEntity>> getHungryCats() {
        List<CatEntity> cats = catService.getHungyCats();
        if (cats.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(cats);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CatEntity> getCatById(@PathVariable("id") Long id) {
        CatEntity cat = catService.getCatById(id);
        if (cat == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cat);
    }

    @PostMapping()
    public ResponseEntity<CatEntity> createCat(@RequestBody CatEntity cat) {
        try {
            catService.createCat(cat);
            return ResponseEntity.ok(cat);
        } catch (Exception e) {
            System.out.println("Error:"+ e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<CatEntity> deleteCatById(@PathVariable("id") Long id) {
        Boolean is_deleted = catService.deleteCat(id);
        if (!is_deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}
