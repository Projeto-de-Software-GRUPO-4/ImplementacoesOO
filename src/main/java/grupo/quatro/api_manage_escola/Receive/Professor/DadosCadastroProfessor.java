package grupo.quatro.api_manage_escola.Receive.Professor;

import grupo.quatro.api_manage_escola.Domain.Materia;
import grupo.quatro.api_manage_escola.Domain.UserType;
import grupo.quatro.api_manage_escola.Receive.Usuario.DadosCadastroUsuario;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class DadosCadastroProfessor extends DadosCadastroUsuario {

        @NotNull
        protected int diaDePagamento;
        protected int cargaHorariaDiaria;
        protected double salarioHora;

        protected String telefone;

        protected BigInteger materia_id;


}
