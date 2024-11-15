import { createContext, ReactNode } from "react";

export const TasksContext = createContext({});

interface TaskProviderProps {
  children: ReactNode;
}

export const TasksProvider: React.FC<TaskProviderProps> = ({ children }) => {
  return (
    <TasksContext.Provider value={"Contexto"}>
      {children}
    </TasksContext.Provider>
  );
};
