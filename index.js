function criaCaculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        clickBotoes() {
            // this aqui aponta para a calculadora
            document.addEventListener('click', function(event) {
                // this aqui aponta para o document
                // Poderia ser utilizado arrow function para o this apontar para a calculadora ao invés do document
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this)); // o bind serve para configurar o this p/ apontar para a calculadora
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        limpaDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch (error) {
                alert('Conta inválida');
                return;
            }
        }
    };
}

const calculadora = criaCaculadora();
calculadora.inicia();