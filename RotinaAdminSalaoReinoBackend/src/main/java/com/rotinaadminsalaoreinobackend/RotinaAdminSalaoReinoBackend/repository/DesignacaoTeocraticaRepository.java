package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.repository;

import com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model.DesignacaoTeocratica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignacaoTeocraticaRepository extends JpaRepository<DesignacaoTeocratica, Long> {
}
