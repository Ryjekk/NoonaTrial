import React, { useRef } from 'react';
// Style
import { ButtonBox, ModalStyle } from "../ui/ModalStyle";
import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import { colorMark } from "../utils/colorMark";
// Interface
import { NewTodoProps } from "../Interface/todo.model";

const ModalBody: React.FC<NewTodoProps> = React.forwardRef(({addTodo, handleClose}, ref) => {
    const colorRef =  useRef<HTMLInputElement>(null);
    const textRef =  useRef<HTMLInputElement>(null);
    const [color, setColor] = React.useState('Black');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };


    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const inputData = {
            text: textRef.current!.value,
            color: colorRef.current!.value,
            id: Math.random().toString()
        }
        addTodo(inputData)
        handleClose!();
    }

    return (
        <ModalStyle>
            <Typography
                variant='h6'
            >
                Add Item
            </Typography>
            <form onSubmit={todoSubmitHandler}>
                <TextField
                    label="Name"
                    required
                    multiline
                    inputRef={textRef}
                />
                <TextField
                    label=" "
                    select
                    inputRef={colorRef}
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
                        onClick={handleClose}
                    >Cancel</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type='submit'
                        style={{backgroundColor: `#286EFA`}}
                    >
                        Save
                    </Button>
                </ButtonBox>
            </form>
        </ModalStyle>
    );
});

export default ModalBody;
