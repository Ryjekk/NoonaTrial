import React, {useEffect, useState} from 'react';
// Components
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import ErrorComponent from "./components/ErrorComponent";
// Style
import { MainWrapper } from "./ui/WrapperStyle";
import {Modal, Typography} from "@material-ui/core";
// Interfaces
import {Todo} from "./Interface/todo.model";

const Solution: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoToEdit, selectTodo] = useState({})

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

    const editTodoHandler = (todoId: string) => {
        selectTodo(pervState => {
            return todos.find(todo => todo.id === todoId)
        })
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
                        editTodo={editTodoHandler}
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
