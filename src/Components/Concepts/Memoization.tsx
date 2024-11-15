import { useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutComes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes])

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memoization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : "XXXXX"}`}</p>
      <br />

      <p>{`Total de Despesas: R$ ${showValues ? totalOutComes : "XXXXX"}`}</p>
      <br />
      <br />

      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};