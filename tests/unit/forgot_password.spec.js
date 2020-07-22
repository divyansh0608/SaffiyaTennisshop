// const {forgotPassword} = require("../../controllers/forgotPasswordController");
// console.log("Unit Testing>>>>>>>>");
// describe("forgotPassword()", () => {
//     it("should return true", () => {
//         //Testing a boolean
//         expect(forgotPassword()).toBeTruthy();
//         //Another way to test a boolean
//         expect(forgotPassword()).toEqual(true);
//         // expect(forgotPassword()).to;
//     });
// });

const {doSomethingBefore,forgotPassword} = require("../../controllers/forgotPasswordController");
// const { doSomethingBefore, forgotPassword }= require("../../controllers/forgotPasswordController");

describe("forgotPassword()", () => {
    it("should do something before the forgotPassword function gets called", () => {
        expect(doSomethingBefore()).toBeFalsy();
    });
    //Then
    it("forgotPassword should return true", () => {
        expect(forgotPassword()).toBeTruthy();
    });
});