import React from 'react';
// Style
import {Button, Typography} from "@material-ui/core";
import {HeaderWrapper} from "../ui/WrapperStyle";
import {CTABox} from "../ui/CTABoxStyle";
// Interface
import {TodoListDeleteAllProps} from "../Interface/todo.model";

const ErrorComponent: React.FC<TodoListDeleteAllProps> = ({deleteAll}) => {
    return (
        <>
            <HeaderWrapper>
                <Typography variant='h6' align='center'>Too many items in list</Typography>
                <Typography variant='body1' align='center'>
                    Delete everything from the list top continue
                </Typography>
            </HeaderWrapper>
            <CTABox>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={deleteAll}
                    style={{ backgroundColor: `#FF3A41`}}
                >
                    Delete Everything
                </Button>
            </CTABox>
        </>
    );
};

export default ErrorComponent;
