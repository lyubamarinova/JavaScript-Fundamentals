function gradsToDeg(grads) {
    let degrees=(grads*360/400)%360;
    while(degrees<0){
        degrees+=360;
    }
    console.log(degrees);
}

gradsToDeg(-50);
