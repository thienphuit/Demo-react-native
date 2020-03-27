export const addNumber =(number) =>{
    return {
        type:'ADDNUMBER',
        value:number,

    }
}
const subNumber = (number) =>{
    return{
        type:'SUBNUMBER',
        value:number
    }
}

export default subNumber;
