package com.example.demo.mainMenu.domain;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MainMenuRepository extends JpaRepository<MainMenu, String>{
	
	@Query(value="select * from MAIN_MENU where aacategory = :AAcategory", nativeQuery=true)
	public List<MainMenu> selectByCategory(@Param("AAcategory") String AAcategory);
	

}