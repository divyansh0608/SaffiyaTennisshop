
// exports.forgotPassword = () => {
//     return true;
// };

exports.doSomethingBefore = () => {
    return false;
};

exports.forgotPassword = (data) => {
    const doSomethingBefore = () => {
        return false;}
    const boolean = doSomethingBefore();
    if(!boolean) {
        return true;
    }
    return false;
};






