const x_trans = document.getElementById('x_trans')
const y_trans = document.getElementById('y_trans')
const rot_degree = document.getElementById('rot_degree')
const scaling_factor = document.getElementById('scaling_factor')
const applyBtn = document.getElementById('applyBtn')
const trans_x_err = document.getElementById('trans_x_err')
const trans_y_err = document.getElementById('trans_y_err')
const scale_factor_err = document.getElementById('scale_factor_err')


let x_trans_val, y_trans_val, rot_degree_val
let scaling_factor_val = 1
let x_trans_rlimit = 150;
let x_trans_Llimit = -150;
let y_trans_ulimit = 100;
let y_trans_Llimit = -150;
let scale_factor_limit = 3
x_trans.onchange = ()=>{
    x_trans_val = parseInt(x_trans.value);

    if(!x_trans_val){
        return
    }

    if(x_trans_val >= x_trans_Llimit  && 
        x_trans_val <= x_trans_rlimit ){
        x_trans_rlimit-= x_trans_val
        x_trans_Llimit-= x_trans_val
        translate_x(x_trans_val);
        trans_x_err.innerHTML = ''
        y_trans.value = ''

    }
    else{
        trans_x_err.innerHTML = `Your value exceeds the canvas limits,
            please enter value between ${x_trans_Llimit} and ${x_trans_rlimit}`
    }
}



y_trans.onchange = ()=>{
    y_trans_val = parseInt(y_trans.value);
    
    if(!y_trans_val){
        return
    }
    if(y_trans_val >= y_trans_Llimit  && 
        y_trans_val <= y_trans_ulimit ){
        y_trans_ulimit-= y_trans_val
        y_trans_Llimit-= y_trans_val
        translate_y(-1*y_trans_val)
        trans_y_err.innerHTML = ''
        y_trans.value = ''
    }
    else{
        trans_y_err.innerHTML = `Your value exceeds the canvas limits,
            please enter value between ${y_trans_Llimit} and ${y_trans_ulimit}`
    }
}



rot_degree.onchange = ()=>{
    rot_degree_val = parseInt(rot_degree.value);

    if(!rot_degree_val){
        return
    }
    rotate(rot_degree_val)
}


scaling_factor.onchange = ()=>{
    scaling_factor_val = parseFloat(scaling_factor.value);
    
    if(!scaling_factor_val){
        return
    }
    if(scaling_factor_val <= scale_factor_limit){
        scale(scaling_factor_val)
        scale_factor_limit /= scaling_factor_val;
        scale_factor_err.innerHTML = ''
        scaling_factor.value = ''
    }
    else{
        scale_factor_err.innerHTML = `Your value exceeds the canvas limits,
        please enter value between 0.1 and ${scale_factor_limit}`
    }
    
}