package com.example.demo.mainMenu.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.mainMenu.domain.MainMenu;
import com.example.demo.mainMenu.domain.MainMenuRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MainMenuService {

	private final MainMenuRepository repo;

	@Transactional(readOnly = true)
	public List<MainMenu> findAll() {
		return repo.findAll();
	}

	@Transactional(readOnly = true)
	public List<MainMenu> findCategory(String category) {

		return repo.selectByCategory(category);
	}

	@Transactional(readOnly = true)
	public Optional<MainMenu> findDetailById(String id) {
		return repo.findById(id);

	}
}
