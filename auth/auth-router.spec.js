const request = require("supertest");
const db = require("../data/db-config");
const server = require("../api/server");

describe("server", () => {
  it("db environment set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // describe("login", () => {
  //   it("should return 200 OK", () => {
  //     // rest client and make a get to '/', look at the status code

  //     return request(server)
  //       .post("/api/login")
  //       .send({
  //         email: "bob@yahoo.com",
  //         password: "pw"
  //       })
  //       .then(res => {
  //         expect(res.status).toBe(200);
  //       });
  //   });
  //   it("should return data in JSON", () => {
  //     return request(server)
  //       .post("/api/login")
  //       .send({
  //         username: "bob",
  //         password: "pw"
  //       })
  //       .then(res => {
  //         expect(res.type).toMatch(/json/);
  //         expect(res.type).toBe("application/json");
  //       });
  //   });
  // });
});
