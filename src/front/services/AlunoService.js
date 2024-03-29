class AlunoService {

    static async cadastrar() {
        let aluno = new AlunoController().createAsJson();
        let response = await fetch("http://localhost:8080/aluno", {
            method: "POST",
            body: aluno,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };
    }

    static async atualizar() {
        let aluno = new AlunoController().createAsJson();
        let response = await fetch(`http://localhost:8080/aluno`, {
            method: "PUT",
            body: aluno,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };
    }

    static async resgatar() {
        let aluno = new AlunoController().create();
        let response = await fetch(`http://localhost:8080/aluno/${aluno.cpf}`);

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        }

    }

    static async resgatarAllByTurma(id_turma) {
        let response = await fetch(`http://localhost:8080/aluno/all/${id_turma}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };
    }

    static async deletar() {
        let aluno = new AlunoController().create();
        let response = await fetch(`http://localhost:8080/aluno/${aluno.cpf}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };
    }

    static async linkarATurma() {
        let aluno = new AlunoController().create();
        let turma = new TurmaController().create();

        const turma_aluno = JSON.stringify({
            id_usuario: aluno.cpf,
            id_turma: turma.id
        })

        let response = await fetch(`http://localhost:8080/aluno/matricular_a_turma`, {
            method: "POST",
            body: turma_aluno,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status, 
            text: response.statusText
        }

    }

    static async deslinkarATurma() {
        let aluno = new AlunoController().create();
        let turma = new TurmaController().create();

        const turma_aluno = JSON.stringify({
            id_usuario: aluno.cpf,
            id_turma: turma.id
        })


        let response = await fetch(`http://localhost:8080/aluno/desmatricular_a_turma`, {
            method: "DELETE",
            body: turma_aluno,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status, 
            text: response.statusText
        }

    }

    static async suspender(cpf) {

        let response = await fetch(`http://localhost:8080/aluno/${cpf}/status_suspensao`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };

    }

    static async expulsar(cpf) {
        let response = await fetch(`http://localhost:8080/aluno/expulsar/${cpf}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {
            json: await response.json(),
            status: response.status,
            text: response.statusText
        };

    }
}