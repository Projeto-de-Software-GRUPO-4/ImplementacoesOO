package grupo.quatro.api_manage_escola.Repository;

import grupo.quatro.api_manage_escola.Domain.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface TurmaRepository extends JpaRepository<Turma, BigInteger> {

    public Optional<Turma> findByAnoEscolarAndLetra(int anoEscolar, String letra);

    public List<Turma> findAllByAnoEscolar(int anoEscolar);

}
