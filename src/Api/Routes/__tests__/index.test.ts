import request from "supertest";
import server from "../../../server";

describe("GET /", () => {
  it("Shou return a JSON object with message 'Working!'", async () => {
    const response = await request(server).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Working!" });
  });
});

describe("GET /error", () => {
  it("Shou return a 404 Error Not Found", async () => {
    const response = await request(server).get("/error");

    expect(response.status).toBe(404);
  });
});
