const request = require("supertest");
const db = require("../data/db-config");
const server = require("../api/server");

describe("server", () => {
  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("register", () => {
    it("should return 201 for creating new user", () => {
      return request(server)
        .post(`/auth/register`)
        .send({
          username: "user",
          password: "pw",
          zipCode: "02045",
          email: "spec@yahoo.com"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    describe("login", () => {
      it("should return 200 OK", () => {
        // rest client and make a get to '/', look at the status code

        return request(server)
          .post("/auth/login")
          .send({
            email: "spec@yahoo.com",
            password: "pw"
          })
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
    });
  });
});

// let token;
// beforeAll(done => {
//   request(server)
//     .post("/auth/register")
//     .send({
//       username: "name",
//       password: "pw",
//       zipCode: "02045",
//       email: "fake@yahoo.com"
//     })
//     .end((err, res) => {
//       if (err) return done(err);
//       done();
//     });
// });
// beforeAll(done => {
//   request(server)
//     .post("/auth/login")
//     .send({
//       email: "fake@yahoo.com",
//       password: "pw"
//     })
//     .end((err, res) => {
//       if (err) return done(err);
//       token = res.body.token;
//       done();
//     });
// });
// afterAll(() => {
//   return db("users").truncate();
// });
