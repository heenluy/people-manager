package com.people_manager.people_manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import com.people_manager.people_manager.model.People;
import com.people_manager.people_manager.service.PeopleService;


@RestController
@RequestMapping("/pessoas")
public class Controller {

    @Autowired
    private PeopleService peopleService;
    
    @GetMapping
    public List<People> listAll() {
        return peopleService.listAllFromRepository();
    }


    @GetMapping("/{id}")
    public ResponseEntity<People> getById(@PathVariable Long id) {
        return peopleService.getByIdFromRepository(id);
    }

    @PostMapping
    public People create(@Valid @RequestBody People people){
        return peopleService.saveToDatabase(people);
    }

    @PutMapping("/{id}")
    public ResponseEntity<People> update(@Valid @PathVariable Long id, @RequestBody People people) {
        return peopleService.updateInDatabase(id, people);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return peopleService.deleteInDatabase(id);
    }
}
