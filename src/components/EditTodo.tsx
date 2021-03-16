import React, {useState} from 'react';
// Components
import ModalBody from "./ModalBody";
import {Modal} from "@material-ui/core";
// Interface
import {NewTodoProps} from "../Interface/todo.model";

const EditTodo: React.FC<NewTodoProps> = ({addTodo}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Modal
            open={open}
            // onClose={handleClose}
        >
            <ModalBody addTodo={addTodo} handleClose={handleClose} />
        </Modal>
    );
};

export default EditTodo;
