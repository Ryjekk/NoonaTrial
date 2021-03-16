import React, { useState } from 'react';
// Components
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import ErrorComponent from "./components/ErrorComponent";
// Interfaces
import { Todo, EditTodo } from "./Interface/todo.model";
// Style
import { MainWrapper } from "./ui/WrapperStyle";
import { Typography } from "@material-ui/core";


const Solution: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (todo: Todo) => {
        setTodos(prevState => [...prevState, todo]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== todoId)
        });
    };

    const todoDeleteAllHandler = () => {
        setTodos([]);
    };

    const editTodoHandler = (obj: EditTodo) => {
        let tempList = todos;
        const idx = tempList.findIndex(todo => todo.id === obj.id);
        tempList[idx] = obj as Todo
        setTodos(tempList)
    };

    return (
        <MainWrapper>
            <Typography variant='h4'>The List</Typography>
            {todos.length > 10
                ? <ErrorComponent deleteAll={todoDeleteAllHandler}/>
                : <>
                    <TodoList
                        items={todos}
                        deleteTodo={todoDeleteHandler}
                        updateList={editTodoHandler}
                    />
                    <NewTodo
                        addTodo={todoAddHandler}
                        show={todos.length === 0}
                    />
                  </>
            }
        </MainWrapper>
    );
};

export default Solution;
