package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@SequenceGenerator(name="seq_publicadorReino", sequenceName = "seq_publicadorReino", allocationSize = 1, initialValue = 1)
public class PublicadorDoReino implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "seq_publicadorReino" )
    private Long idPublicador;
    private String nome;
    private String email;
    @ManyToMany
    private List<DesignacaoTeocratica> designacaoDoPublicador;
    private String anoBatismo;
    private String mediaHoraCampoMensal;
    private Boolean statusAtivoInativo;

    public PublicadorDoReino() { }

    public Long getIdPublicador() {
        return idPublicador;
    }

    public void setIdPublicador(Long idPublicador) {
        this.idPublicador = idPublicador;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<DesignacaoTeocratica> getDesignacaoDoPublicador() {
        return designacaoDoPublicador;
    }

    public void setDesignacaoDoPublicador(List<DesignacaoTeocratica> designacaoDoPublicador) {
        this.designacaoDoPublicador = designacaoDoPublicador;
    }

    public String getAnoBatismo() {
        return anoBatismo;
    }

    public void setAnoBatismo(String anoBatismo) {
        this.anoBatismo = anoBatismo;
    }

    public String getMediaHoraCampoMensal() {
        return mediaHoraCampoMensal;
    }

    public void setMediaHoraCampoMensal(String mediaHoraCampoMensal) {
        this.mediaHoraCampoMensal = mediaHoraCampoMensal;
    }

    public Boolean getStatusAtivoInativo() {
        return statusAtivoInativo;
    }

    public void setStatusAtivoInativo(Boolean statusAtivoInativo) {
        this.statusAtivoInativo = statusAtivoInativo;
    }
}
