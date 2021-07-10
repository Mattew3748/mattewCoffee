package com.example.demo.addCart.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AddCartVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idx;

	private String id;

	private String AAcategory;
	private String BBen;
	private String CCkor;
	private Integer DDprice;
	private String EElocation;
	private String FFdetail;
	private String GGiceHot;
	private Integer HHcount = 1;

	@Column(nullable = true)
	private String IIorderNum;
	private String JJstatus = "cart";

}
