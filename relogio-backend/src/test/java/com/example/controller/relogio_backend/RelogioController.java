package com.example.controller.relogio_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.horario.relogio_backend.Horario;
import com.example.repository.relogio_backend.HorarioRepository;

import java.time.LocalTime;

@RestController
@RequestMapping("/api")
public class RelogioController {

    @Autowired
    private HorarioRepository horarioRepository;

    @GetMapping("/hora")
    public String getHoraAtual() {
        LocalTime horaAtual = LocalTime.now();

        // Salva a hora atual no banco de dados
        Horario horario = new Horario();
        horario.setHora(horaAtual);
        horarioRepository.save(horario);

        return horaAtual.toString();
    }
}