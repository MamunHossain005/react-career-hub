const getItemFromLocalStorage = () => {
    const jobs = localStorage.getItem('jobs');
    if(jobs){
        return JSON.parse(jobs);
    }
    else return [];
}

const setItemInLocalStorage = (val) => {
    const jobs = getItemFromLocalStorage();
    jobs.push(val);
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

export  {getItemFromLocalStorage, setItemInLocalStorage};