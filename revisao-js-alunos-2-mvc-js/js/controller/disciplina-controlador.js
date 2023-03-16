class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
        alert('Disciplina adicionada!');
    }
        
    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const BotaoApaga = document.createElement("button");
        BotaoApaga.textContent = "X";

        BotaoApaga.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(BotaoApaga);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

} 