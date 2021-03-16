import React, { useState, useEffect } from 'react';
// Interface
import { EditModalProps } from '../../Interface/todo.model';
// Data
import { colorMark } from "../../utils/colorMark";
// Style
import { Button, Modal, MenuItem, TextField, Typography } from "@material-ui/core";
import { ButtonBox, ModalStyle } from "../../ui/ModalStyle";

const EditModalBody: React.FC<EditModalProps> = ({modal, toggle, todoObj, updateTodo}) => {
    const [taskName, setTaskName] = useState<string | undefined>('');
    const [color, setColor] = useState<string | undefined>('');

    const handleUpdate = (event: React.FormEvent) => {
        event.preventDefault()
        let editedTask = {...todoObj};
        editedTask.text = taskName;
        editedTask.color = color;
        updateTodo!(editedTask)
        toggle()
    }

    const handleChange = (e: React.FormEvent) => {
        const t = e.target as HTMLTextAreaElement;
        const {name, value} = t
        name === "taskName" ? setTaskName(value) : setColor(value)
    }

    useEffect(() => {
        setTaskName(todoObj!.text)
        setColor(todoObj!.color)
    }, [todoObj])

    return (
        <Modal
            open={modal}
            onClose={toggle}
        >
            <ModalStyle>
                <Typography
                    variant='h6'
                >
                    Edit Item
                </Typography>
                <form onSubmit={handleUpdate}>
                    <TextField
                        style={{paddingBottom: '15px'}}
                        name={'taskName'}
                        label="Name"
                        required
                        multiline
                        defaultValue={taskName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Color"
                        select
                        value={color}
                        onChange={handleChange}
                    >
                        {colorMark.map(option => (
                            <MenuItem
                                key={option.value}
                                value={option.value}>{option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <ButtonBox>
                        <Button
                            variant="outlined"
                            onClick={toggle}
                            style={{borderRadius: '50px'}}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type='submit'
                            style={{
                                backgroundColor: `#286EFA`,
                                borderRadius: '50px',
                                width: '91px'
                            }}
                        >
                            Save
                        </Button>
                    </ButtonBox>
                </form>
            </ModalStyle>
        </Modal>
    );
};

export default EditModalBody;
