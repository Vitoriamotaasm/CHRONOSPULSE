package com.example.repository.relogio_backend;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.horario.relogio_backend.Horario;

public interface HorarioRepository extends JpaRepository<Horario, Long> {
}