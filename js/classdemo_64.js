const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case "w1":
            showDemo.innerHTML = `<iframe src='./demo/W01/index.html' width="100%" height="100%" />`; 
            break;
        case "w2":

        break;
    }
}