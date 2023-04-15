package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class DesignacaoTeocratica  implements Serializable {

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "seq_publicadorReino" )
    private Long idDesignacaoTeocratica;
    private String pioneiro;
    private String anciao;
    private String indicador;
    private String MicrofoneVolante;
    private String servoMinisterial;
    private String operadorSom;
    private String presidenteReuniaoPublVidaMinist;
    private String oradorPublico;

    public DesignacaoTeocratica() {}

    public Long getIdDesignacaoTeocratica() {
        return idDesignacaoTeocratica;
    }

    public void setIdDesignacaoTeocratica(Long idDesignacaoTeocratica) {
        this.idDesignacaoTeocratica = idDesignacaoTeocratica;
    }

    public String getPioneiro() {
        return pioneiro;
    }

    public void setPioneiro(String pioneiro) {
        this.pioneiro = pioneiro;
    }

    public String getAnciao() {
        return anciao;
    }

    public void setAnciao(String anciao) {
        this.anciao = anciao;
    }

    public String getIndicador() {
        return indicador;
    }

    public void setIndicador(String indicador) {
        this.indicador = indicador;
    }

    public String getMicrofoneVolante() {
        return MicrofoneVolante;
    }

    public void setMicrofoneVolante(String microfoneVolante) {
        MicrofoneVolante = microfoneVolante;
    }

    public String getServoMinisterial() {
        return servoMinisterial;
    }

    public void setServoMinisterial(String servoMinisterial) {
        this.servoMinisterial = servoMinisterial;
    }

    public String getOperadorSom() {
        return operadorSom;
    }

    public void setOperadorSom(String operadorSom) {
        this.operadorSom = operadorSom;
    }

    public String getPresidenteReuniaoPublVidaMinist() {
        return presidenteReuniaoPublVidaMinist;
    }

    public void setPresidenteReuniaoPublVidaMinist(String presidenteReuniaoPublVidaMinist) {
        this.presidenteReuniaoPublVidaMinist = presidenteReuniaoPublVidaMinist;
    }

    public String getOradorPublico() {
        return oradorPublico;
    }

    public void setOradorPublico(String oradorPublico) {
        this.oradorPublico = oradorPublico;
    }
}
