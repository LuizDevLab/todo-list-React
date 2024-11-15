import { StatsCards } from "../StatsCard/StatsCards";
import styles from "./Styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vindo, Luiz</span>
        </div>

        <div>
          <StatsCards title="Total de Tarefas" value={5} />
          <StatsCards title="Tarefas Pendentes" value={4} />
          <StatsCards title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
