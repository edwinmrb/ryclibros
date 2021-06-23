package com.juancarlos.ryclibros.repository;

import com.juancarlos.ryclibros.domain.Prestamo;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Prestamo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo, Long> {
    @Query("select prestamo from Prestamo prestamo where prestamo.user.login = ?#{principal.username}")
    List<Prestamo> findByUserIsCurrentUser();
}