import supertest from "supertest";
import { expect } from "chai";

const request = supertest("https://gorest.co.in/public/v2/");
const TOKEN =
  "70d07decbf91739af548ee45a481441083c14da609326ac12cab670f35391e07";
describe("Users", () => {
  it("GET/Users", () => {
    // request.get(`users?access-token=${TOKEN}`).end((err,res) => {
    //     expect(res.statusCode).to.equal(200);
    //     expect(res.body).to.exist;
    //     expect(res.body).to.not.be.empty;
    //     console.log(res.body);
    //     done();
    //   });
    return request.get(`users?access-token=${TOKEN}`).then((res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.not.be.empty;
      console.log(res.body);
    });
  });
  it("GET / Users by ID", () => {
    return request.get(`users?id=1630297access-token=${TOKEN}`).then((res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.exist;
      console.log(res.body);
    });
  });

  it("POST /Create User",  () => {
    const data = {
      name: "soloTester",
      email: `testapi-${Math.floor(Math.random() * 500)}@onetest.com`,
      gender: "Male",
      status: "Inactive",
    };
    return request
  .post('users')
  .set('Autorization', `Bearer ${TOKEN}`)
  .send(data)
  .then((res) => {
    console.log(data); 
    //expect(res.body.data).to.deep.include(data);
  });

      
  });
});
