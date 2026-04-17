import React, { useState } from 'react';

function CapturaDados({ onCalcular }) {
  const [dados, setDados] = useState({
    valorInicial: '',
    aporte: '',
    taxa: '',
    periodo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalcular(dados);
  };

  const handleLimpar = () => {
    setDados({
      valorInicial: '',
      aporte: '',
      taxa: '',
      periodo: ''
    });
  };

  return (
    <div className="painel h-100">
      <h2 className="subtitulo mb-3">Captura de Dados</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Valor inicial</label>
          <input
            type="number"
            name="valorInicial"
            value={dados.valorInicial}
            onChange={handleChange}
            className="form-control campo"
            placeholder="Digite o valor inicial"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Valor de aporte</label>
          <input
            type="number"
            name="aporte"
            value={dados.aporte}
            onChange={handleChange}
            className="form-control campo"
            placeholder="Digite o aporte mensal"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Taxa de juros (%)</label>
          <input
            type="number"
            name="taxa"
            value={dados.taxa}
            onChange={handleChange}
            className="form-control campo"
            placeholder="Digite a taxa de juros"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Período</label>
          <input
            type="number"
            name="periodo"
            value={dados.periodo}
            onChange={handleChange}
            className="form-control campo"
            placeholder="Digite o período"
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CapturaDados;