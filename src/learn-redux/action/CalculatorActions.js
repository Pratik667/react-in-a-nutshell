export const ADD = "ADD";
export const SUB = "SUB";
export const DIVIDE = "DIVIDE";
export const MUTP = "MUTP";

export const addCalculate = (fname, sname) => ({
    type: ADD,
    fname: fname,
    sname: sname,
});

export const subCalculate = (fname, sname) => ({
    type: SUB,
    fname: fname,
    sname: sname,
});

export const divCalculate = (fname, sname) => ({
    type: DIVIDE,
    fname: fname,
    sname: sname,
});

export const mutpCalculate = (fname, sname) => ({
    type: MUTP,
    fname: fname,
    sname: sname,
})