package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.repository;

import com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model.PublicadorDoReino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicadorDoReinoRepository  extends JpaRepository<PublicadorDoReino, Long> {
}
