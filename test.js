const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test api status code', () => {
    it('should return 200 status code', () => {
        chai.request('https://petstore.swagger.io/v2').get('/store/order')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done(); 
            });
    });
});


