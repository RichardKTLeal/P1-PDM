import React from 'react';

function ExibeDados({ resultado, historico }) {
  return (
    <div className="painel h-100">
      <h2 className="subtitulo mb-3">Exibição de Resultados</h2>

      {resultado ? (
        <div className="resultado-box mb-4">
          <p><strong>Valor final acumulado:</strong> R$ {resultado.valorFinal.toFixed(2)}</p>
          <p><strong>Número de aportes:</strong> {resultado.numeroAportes}</p>
          <p><strong>Juros acumulados:</strong> R$ {resultado.jurosAcumulados.toFixed(2)}</p>
          <p className="mb-0"><strong>Rentabilidade:</strong> {resultado.rentabilidade.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="resultado-vazio mb-4">
          Preencha os dados e clique em calcular para ver a simulação.
        </div>
      )}

      <h2 className="subtitulo mb-3">Histórico de Simulações</h2>

      {/* 👉 NOVO */}
      <p><strong>Total de simulações:</strong> {historico.length}</p>

      {historico.length > 0 ? (
        <ul className="list-group lista-historico">
          {historico.map((item, index) => (
            <li key={index} className="list-group-item item-historico">
              <span><strong>Valor final:</strong> R$ {item.valorFinal.toFixed(2)}</span>
              <span><strong>Data/Hora:</strong> {item.dataHora}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="resultado-vazio">
          Nenhuma simulação realizada até o momento.
        </div>
      )}
    </div>
  );
}

export default ExibeDados;