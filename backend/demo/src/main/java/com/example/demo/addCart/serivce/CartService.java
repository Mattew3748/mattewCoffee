package com.example.demo.addCart.serivce;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.addCart.domain.AddCartVO;
import com.example.demo.addCart.domain.CartRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository repo;

	@Transactional(readOnly = true)
	public List<AddCartVO> findAllCart(String status) {
		return repo.selectStatusByCart(status);
	}

	@Transactional
	public AddCartVO addCartSave(AddCartVO vo) {

		return repo.save(vo);

	}

	@Transactional(readOnly = true)
	public String findByIdIceHot(AddCartVO vo) {
		List<AddCartVO> check = repo.selectByIceHot(vo.getId(), vo.getGGiceHot());
		if (check.isEmpty()) {
			return "empty";
		} else {
			return "full";

		}
	}

	@Transactional
	public String deleteById(Long idx) {
		repo.deleteById(idx);

		return "ok";
	}

	@Transactional
	public String updateCart(Long idx, Integer count) {
		repo.updateCart(idx, count);

		return "ok";
	}

	@Transactional
	public String updateStatusOrdered() {
		String tempChar = "C";
		String tempRandom = "";
		Random ran = new Random();
		for (int i = 0; i < 4; i++) {
			tempRandom += String.valueOf(ran.nextInt(9));
		}
		String createOrderNum = tempChar + tempRandom;
		String status = "ordered";
		String preStatus = "cart";

		repo.updateStatus(createOrderNum, status, preStatus);

		return createOrderNum;
	}

	@Transactional(readOnly = true)
	public Integer countCardNum() {
		return repo.countCardNum();
	}

	public String transOkMassage() {
		return "ok";
	}

//	admin 부분
	@Transactional(readOnly = true)
	public List<AddCartVO> findAllbyStatus(String status) {
		return repo.findAllbyStatus(status);
	}

	@Transactional
	public Integer updateStatusByidx(Long idx) {
		return repo.updateStatusByidx(idx);
	}

}
