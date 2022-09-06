package com.cat.app.catapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cat.app.catapp.entities.CatEntity;

public interface CatRepository  extends JpaRepository<CatEntity, Long> {
    @Query(value="SELECT * FROM cats c WHERE c.energy <= 5", nativeQuery = true)
    List<CatEntity> findHungryCats();
}
