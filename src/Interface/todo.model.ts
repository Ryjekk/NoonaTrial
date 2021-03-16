export interface Todo {
    text: string,
    color: string,
    id: string
}

export interface EditTodo {
    id?: string,
    text?: string,
    color?: string
}

export interface TodoListProps {
    items: { id: string, text: string, color: string }[],
    deleteTodo: (id: string) => void,
    updateList: (obj: EditTodo) => void,
}

export interface TodoListDeleteAllProps {
    deleteAll: () => void,
}

export interface NewTodoProps {
    addTodo: (obj: Todo) => void,
    show?: boolean,
    handleClose?: () => void;
}

export interface EditModalProps {
    modal: boolean,
    toggle: () => void,
    todoObj?: EditTodo,
    updateTodo?: (obj: EditTodo) => void
}
