package com.example.demo.mainMenu.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class MainMenu {
	
	@Id
	private String id;
	
	private String AAcategory;
	private String BBen;
	private String CCkor;
	private Integer DDprice;
	private String EElocation;
	private String FFdetail;
	

}