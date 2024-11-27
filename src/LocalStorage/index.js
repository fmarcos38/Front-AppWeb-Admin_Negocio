//obtengo data user log
const userLogData = () => {
    const data = JSON.parse(localStorage.getItem('userLog'));
    return data;
};

//logout
const logout = () => {
    localStorage.removeItem('userLog');
    window.location.href = '/home'; //redirijo a home
};

//exporto
export { 
    userLogData, 
    logout 
};