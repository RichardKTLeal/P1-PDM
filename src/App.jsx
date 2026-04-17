import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';
import ExibeDados from './ExibeDados';

function App() {
  const [resultado, setResultado] = useState(null);

  const calcularInvestimento = ({ valorInicial, aporte, taxa, periodo }) => {
    const valorInicialNumero = Number(valorInicial);
    const aporteNumero = Number(aporte);
    const taxaNumero = Number(taxa) / 100;
    const periodoNumero = Number(periodo);

    let montante = valorInicialNumero;
    let totalInvestido = valorInicialNumero;

    for (let i = 0; i < periodoNumero; i += 1) {
      montante = montante * (1 + taxaNumero);
      montante += aporteNumero;
      totalInvestido += aporteNumero;
    }

    const jurosAcumulados = montante - totalInvestido;
    const rentabilidade = totalInvestido > 0 ? (jurosAcumulados / totalInvestido) * 100 : 0;

    const novoResultado = {
      valorFinal: montante,
      numeroAportes: periodoNumero,
      jurosAcumulados,
      rentabilidade
    };

    setResultado(novoResultado);
  };

  return (
    <div className="app-fundo">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="app-card p-4">
              <h1 className="titulo text-center mb-4">Hello, Investimentos</h1>

              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <CapturaDados onCalcular={calcularInvestimento} />
                </div>

                <div className="col-12 col-md-6">
                  <ExibeDados resultado={resultado} historico={[]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;