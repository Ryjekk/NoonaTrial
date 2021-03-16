import React, {useEffect, useState} from 'react';
// Style
import {Modal, Button, Typography} from '@material-ui/core';
import { CTABox } from "../ui/CTABoxStyle";
import {HeaderWrapper} from "../ui/WrapperStyle";
// Interface
import { NewTodoProps } from "../Interface/todo.model";
// Utils
import ModalBody from "./ModalBody";


const NewTodo: React.FC<NewTodoProps> = ({addTodo, show}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };

    const heading = (
        <HeaderWrapper>
            <Typography variant='h6' align='center'>No items in list</Typography>
            <Typography variant='body1' align='center'>
                Lets change that buy pressing the button below
            </Typography>
        </HeaderWrapper>
    )

    return (
       <>
        {show ? heading : null}
        <CTABox>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                style={{backgroundColor: `#286EFA`}}
            >
                Add Item
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalBody addTodo={addTodo} handleClose={handleClose} />
            </Modal>
        </CTABox>
       </>
    );
};

export default NewTodo;
