import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { InputForm } from "./components/InputForm";
import { List } from "./components/List";

const StyledContainer = styled.div`
  width: 327px;
  margin: 24px auto;
`;

export type TodoList = {
  id: string;
  content: string;
  isCompleted: boolean;
};

function App() {
  const [todoList, setTodoList] = React.useState<TodoList[]>([]);

  return (
    <StyledContainer>
      <Typography variant="h1" sx={{ fontSize: "32px" }}>
        今日やること
      </Typography>
      <InputForm setTodoList={setTodoList} todoList={todoList} />
      <List setTodoList={setTodoList} todoList={todoList} />
    </StyledContainer>
  );
}

export default App;
