import React, { useRef, useState, forwardRef } from 'react';
// Interface
import { NewTodoProps } from "../../Interface/todo.model";
// Data
import { colorMark } from "../../utils/colorMark";
// Style
import { ButtonBox, ModalStyle } from "../../ui/ModalStyle";
import { Button, MenuItem, TextField, Typography } from "@material-ui/core";

const ModalBody: React.FC<NewTodoProps> = forwardRef(({ addTodo, handleClose }, ref) => {
    const colorRef =  useRef<HTMLInputElement>(null);
    const textRef =  useRef<HTMLInputElement>(null);
    const [color, setColor] = useState<string>('Black');

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
                    style={{paddingBottom: '15px'}}
                    label="Name"
                    required
                    multiline
                    inputRef={textRef}
                />
                <TextField
                    label="Color"
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
    );
});

export default ModalBody;
