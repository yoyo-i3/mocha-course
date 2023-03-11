var assert = require('assert');

var a = 10;
var b = 10;

describe('Math operations - Test suite', () => {
    before('Execute before all tests', () => {
        console.log('Execute before all tests')
    })

    beforeEach('Execute before each test', () =>{
        console.log('execute before each test')
    })

    after('Execute after all tests', () => {
        console.log('Execute after all tests')
    })

    afterEach('Execute after each test', () => {
        console.log('Execute after each test')
    })

    it.skip('Addition of 2 variables', ()=>{
        var c = a+b;
        assert.equal(c, 20, `${c} does not match expected value 20`);
    });
//Hence, if we execute a test without a callback function, that particular test will become pending
    it('This is a test for pending test feature')

    it('subtraction of 2 variables', (done) => {
        setTimeout(done, 500)
        var c = a-b;
        assert.equal(c, 0, `${c} does not match expected value 0`)
    })

    it('multiplication of 2 variables', () => {
        var c = a*b;
        assert.equal(c, 100, `${c} does not match expected value 100`)
    })

    it('division of 2 variables', () => {
        var c = a/b;
        assert.equal(c, 1, `${c} does not match expected value 1`)
    })
});

//
//There are 3 levels where timeouts can be used. First, suite-level. Second, test-level. And third, hook-level.
//
//Suite-level timeouts are used to throw out the test suits.
//Whereas test-level timeouts are specific to the test case.
//Hook-level timeouts can be used in the hooks.

//If we are setting timeout, please make sure to use done function call in the test case level.
//   setTimeout(done,3000);
//
//    it ('Addition of two numbers', function(done){
//        var c = a+b;
//        assert.equal(c,20);
//});
//
//
//There are different types of reporters available as part of Mocha, of which, spec and dot matrix are the commonly used reporter types.
//
//Spec is the default reporter.
//
//The spec reporter outputs a hierarchical view according to the test cases.
//
//The dot matrix reporter is a series of characters which represent the test cases.
//
//Failures are highlighted in the red exclamation mark, the pending tests with the blue comma and the slow tests as a yellow color.
//
//There are other types that are available like NYAN, TAP, Landing Strip, List, Progress, JSON, Json Stream.