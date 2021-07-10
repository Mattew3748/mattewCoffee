package com.example.demo.addCart.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.mainMenu.domain.MainMenu;

public interface CartRepository extends JpaRepository<AddCartVO, Long> {

	@Query(value = "select * from ADD_CARTVO where id = :id and ggice_hot = :ggicehot and jjstatus='cart'", nativeQuery = true)
	public List<AddCartVO> selectByIceHot(@Param("id") String id, @Param("ggicehot") String ggicehot);

	@Query(value = "select count(*) as count from add_cartvo", nativeQuery = true)
	public Integer countCardNum();

	@Modifying
	@Query(value = "update ADD_CARTVO set hhcount = :count where idx = :idx", nativeQuery = true)
	public void updateCart(@Param("idx") Long idx, @Param("count") Integer count);

	@Modifying
	@Query(value = "update ADD_CARTVO  set jjstatus = :status, iiorder_num = :createOrderNum where jjstatus = :preStatus", nativeQuery = true)
	public void updateStatus(@Param("createOrderNum") String createOrderNum, @Param("status") String status,
			@Param("preStatus") String preStatus);

	@Query(value = "select * from ADD_CARTVO where jjstatus = :status", nativeQuery = true)
	public List<AddCartVO> selectStatusByCart(@Param("status") String status);

	@Query(value = "select * FROM ADD_CARTVO where jjstatus = :status", nativeQuery = true)
	public List<AddCartVO> findAllbyStatus(@Param("status") String status);

	@Modifying
	@Query(value = "update ADD_CARTVO set jjstatus = 'past'  where idx= :idx", nativeQuery = true)
	public Integer updateStatusByidx(@Param("idx") Long idx);
}
