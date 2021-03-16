import React, { useState } from 'react';
// Components
import EditModalBody from "./Modals/EditModalBody"
// Interface
import { TodoListProps, EditTodo } from "../Interface/todo.model";
// Styles
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { LiWrap, LiElement, UlElement } from "../ui/ListStyle";

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo, updateList }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [itemToEdit, setItem] = useState<EditTodo>({})

    const toggle = () => {
        setModal(!modal);
    }

    const updateTodo = (obj: EditTodo) => {
        updateList(obj)
    }

    return (
        <UlElement>
            {items.map(item =>
                <LiWrap key={item.id}>
                    <LiElement
                        onClick={() => {
                            setModal(true)
                            setItem(item)
                        }}
                    >
                        <p style={{color: `${item.color}`}}>
                            {item.text}
                        </p>
                    </LiElement>
                    <IconButton
                        aria-label="delete"
                        onClick={deleteTodo.bind(null, item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </LiWrap>
            )}
            <EditModalBody
                modal={modal}
                toggle={toggle}
                todoObj={itemToEdit}
                updateTodo={updateTodo}
            />
        </UlElement>
    );
};

export default TodoList;
