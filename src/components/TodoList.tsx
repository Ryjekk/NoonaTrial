import React from 'react';
// Interface
import { TodoListProps } from "../Interface/todo.model";
// Styles
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { LiElement, UlElement } from "../ui/ListStyle";

const TodoList: React.FC<TodoListProps> = ({items, deleteTodo, editTodo}) => {
    return (
        <UlElement>
            {items.map(item =>
                <LiElement
                    key={item.id}
                    onClick={editTodo.bind(null, item.id)}
                >
                    <p style={{color: `${item.color}`}}>
                        {item.text}
                    </p>
                    <IconButton
                        aria-label="delete"
                        onClick={deleteTodo.bind(null, item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </LiElement>
            )}
        </UlElement>
    );
};

export default TodoList;
