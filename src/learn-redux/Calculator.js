import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCalculate, subCalculate, divCalculate, mutpCalculate } from './action/CalculatorActions';
import { TextField, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import './calculator.css';

function Calculator() {
    const [fnvalue, setFnvalue] = useState('');
    const [snvalue, setSnvalue] = useState('');
    const [output, setOutput] = useState('');
    const data = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        return setOutput(data.result);
    }, [data]);

    const handleAdd = () => {
        dispatch(addCalculate(fnvalue, snvalue));
    }
    const handleSub = () => {
        dispatch(subCalculate(fnvalue, snvalue));
    }
    const handleDiv = () => {
        dispatch(divCalculate(fnvalue, snvalue));
    }
    const handleMutp = () => {
        dispatch(mutpCalculate(fnvalue, snvalue));
    }
    const handleReset = () => {
        setFnvalue('');
        setSnvalue('');
        setOutput('');
    }
    return (

        <Container maxWidth="sm">
            <h1>Calculator using React Redux</h1>

            <form>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <TextField type="number" name="firstnumber" placeholder="First Number" label="First Number" variant="outlined" value={fnvalue} onChange={(e) => setFnvalue(e.target.value)} />
                        </Grid>
                        <Grid size={6}>
                            <TextField type="number" name="secondnumber" placeholder="Second Number" label="Second Number" variant="outlined" value={snvalue} onChange={(e) => setSnvalue(e.target.value)} />
                        </Grid>
                        <Grid size={3}>
                            <Button type="button" name="add" variant="contained" onClick={handleAdd}>Add</Button>
                        </Grid>
                        <Grid size={3}>
                            <Button type="button" name="sub" variant="contained" onClick={handleSub}>Subtract</Button>
                        </Grid>
                        <Grid size={3}>
                            <Button type="button" name="divide" variant="contained" onClick={handleDiv}>Divide</Button>
                        </Grid>
                        <Grid size={3}>
                            <Button type="button" name="mutp" variant="contained" onClick={handleMutp}>Multiply</Button>
                        </Grid>
                        <Grid size={6}>
                            <Button type="button" name="reset" variant="contained" color="error" onClick={handleReset}>Reset</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <span>{output}</span>
        </Container>
    )
}

export default Calculator