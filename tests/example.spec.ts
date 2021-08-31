import supertest from "supertest";

import { app } from "../src/app";

describe("Example test", () => {
  it("Should log Hello functional tests!", () => {
    const message = "Hello functional tests!";

    expect(message).toBe("Hello functional tests!");
  });

  it("Should get the Hello message from hello route", async () => {
    const response = await supertest(app).get("/hello");

    expect(response.body).toEqual({ message: "Hello world!" });
  });
});
