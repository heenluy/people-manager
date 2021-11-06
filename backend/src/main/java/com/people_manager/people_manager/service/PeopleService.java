package com.people_manager.people_manager.service;

import java.util.List;

import com.people_manager.people_manager.model.People;
import com.people_manager.people_manager.repository.PeopleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Service
public class PeopleService {
    
    @Autowired
    private PeopleRepository peopleRepository;

    public List<People> listAllFromRepository() {
        return peopleRepository.findAll();
    }

    public ResponseEntity<People> getByIdFromRepository(Long id) {
        return peopleRepository.findById(id)
        .map(mapper -> ResponseEntity.ok(mapper))
        .orElse(ResponseEntity.notFound().build());
    }

    public People saveToDatabase(People people) {
        return peopleRepository.save(people);
    }

    public ResponseEntity<People> updateInDatabase(Long id, People people) {
        
        if(!peopleRepository.existsById(id)) {
            ResponseEntity.notFound().build();
        }

        people.setId(id);
        people = peopleRepository.save(people);
        
        return ResponseEntity.ok(people);
    }

    public ResponseEntity<Void> deleteInDatabase(Long id) {
        
        if(!peopleRepository.existsById(id)) {
            ResponseEntity.notFound().build();
        }

        peopleRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    
}
