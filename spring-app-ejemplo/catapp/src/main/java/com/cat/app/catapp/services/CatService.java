package com.cat.app.catapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cat.app.catapp.entities.CatEntity;
import com.cat.app.catapp.repositories.CatRepository;

@Service
public class CatService {

    @Autowired
    CatRepository catRepository;

    public List<CatEntity> getAll() {
        return catRepository.findAll();
    }

    public CatEntity getCatById(Long id) {
        return catRepository.findById(id).orElse(null);
    }

    public CatEntity createCat(CatEntity cat) {
        return catRepository.save(cat);
    }

    public Boolean deleteCat(Long id) {
        try {
            catRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    public List<CatEntity> getHungyCats() {
        return catRepository.findHungryCats();
    }
}
