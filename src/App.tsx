import React from "react";
import styled from "@emotion/styled";
import { Typography, Button, TextField, Divider } from "@mui/material";

const StyledContainer = styled.div`
  width: 327px;
  margin: 24px auto;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 327px;
  height: 32px;
  margin-top: 32px;
`;

const StyledList = styled.ul`
  margin-top: 32px;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 134px;
`;

type TodoList = {
  id: string;
  content: string;
  isCompleted: boolean;
};

function App() {
  const [todoList, setTodoList] = React.useState<TodoList[]>([]);
  const [content, setContent] = React.useState("");

  const addTodoItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setContent("");
    setTodoList([
      ...todoList,
      {
        id: crypto.randomUUID(),
        content,
        isCompleted: false,
      },
    ]);
  };

  const completedTodoItem = (id: string) => {
    const updateList = todoList.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          isCompleted: !data.isCompleted,
        };
      }
      return data;
    });
    setTodoList(updateList);
  };

  const deleteTodoItem = (id: string) => {
    const updateList = todoList.filter((data) => data.id !== id);
    setTodoList(updateList);
  };

  return (
    <StyledContainer>
      <Typography variant="h1" sx={{ fontSize: "32px" }}>
        今日やること
      </Typography>
      <StyledForm onSubmit={(e) => addTodoItem(e)}>
        <TextField
          id="add-todo-item"
          type="text"
          placeholder="タスクを入力"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            width: "250px",
          }}
        />
        <Button
          type="submit"
          disabled={!content}
          variant="contained"
          size="small"
          sx={{
            minWidth: "57px",
            height: "32px",
            backgroundColor: `${!content ? "#C1C1C1" : "#008CFF"}`,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: `${!content ? "#C1C1C1" : "#008CFF"}`,
              boxShadow: "none",
            },
          }}
        >
          追加
        </Button>
      </StyledForm>
      <StyledList>
        {todoList.map((item) => (
          <>
            <StyledListItem key={item.id}>
              <Typography
                sx={{
                  textDecoration: () =>
                    item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.content}
              </Typography>
              <StyledButtonWrapper>
                <Button
                  type="button"
                  onClick={() => deleteTodoItem(item.id)}
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: "57px",
                    height: "32px",
                    backgroundColor: "#FF3700",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#FF3700",
                      boxShadow: "none",
                    },
                  }}
                >
                  削除
                </Button>
                <Button
                  type="button"
                  onClick={() => completedTodoItem(item.id)}
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: "57px",
                    height: "32px",
                    backgroundColor: `${
                      item.isCompleted ? "#C1C1C1" : "#008CFF"
                    }`,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: `${
                        item.isCompleted ? "#C1C1C1" : "#008CFF"
                      }`,
                      boxShadow: "none",
                    },
                  }}
                >
                  完了
                </Button>
              </StyledButtonWrapper>
            </StyledListItem>
            <Divider component="li" />
          </>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

export default App;
