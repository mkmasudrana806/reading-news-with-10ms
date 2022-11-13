
const addToDb = (time) =>{
    let break_time = {};
    const storedCart = localStorage.getItem('break_times');
    if(storedCart){
        break_time = JSON.parse(storedCart);
    }
    const quantity = break_time[time];
    if(quantity){
        const newQuantity = quantity + 1;
        break_time[time] = newQuantity;
    }
    else{
        break_time[time] = 1;
    }
    localStorage.setItem('break_times', JSON.stringify(break_time));
}

export {addToDb};