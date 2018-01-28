const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it ('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
        
        it ('should add two numbers async', (done) => {
            utils.asyncAdd(3, 1, (sum) => {
                expect(sum).toBe(4).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it ('should square two numbers', () => {
            let res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
        });
    });

    it ('should expect some values', () => {
        // expect(12).toNotBe(11);
        expect({name: 'Mike'}).toEqual({name: 'Mike'});
        expect([2, 3, 4]).toInclude(2);
        expect([2, 3, 4]).toExclude(5);
        expect({
            name: 'Mike',
            age: 25,
            location: 'Philadelphia'
        }).toInclude({
            age: 25
        });
    });
});




it ('should verify first and last names are set', () => {
    let user = {
        location: 'Philadelphia',
        age: 25,
    }
    let res = utils.setName(user, 'Mike Ji');
    expect(user).toInclude({
        firstName: 'Mike',
        lastName: 'Ji'
    });
});