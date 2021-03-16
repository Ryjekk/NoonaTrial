export interface Todo {
    text: string,
    color: string,
    id: string
}

export interface TodoListProps {
    items: { id: string, text: string, color: string }[],
    deleteTodo: (id: string) => void,
    editTodo: (id: string) => void,
}

export interface TodoListDeleteAllProps {
    deleteAll: () => void,
}

export interface NewTodoProps {
    addTodo: (obj: Todo) => void,
    show?: boolean,
    handleClose?: () => void;
}
