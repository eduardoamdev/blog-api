jest.mock("../../../app/lib/database", () => ({
  connectToDB: jest.fn(),
  dbClient: {
    query: jest
      .fn()
      .mockImplementationOnce(
        jest.fn(() => ({ rows: [{ title: "x", content: "x" }] }))
      )
      .mockImplementationOnce(jest.fn(() => ({ rows: [] }))),
  },
}));

import { getArticleAction } from "../../../app/actions/articles/getArticleAction";

describe("Get articleAction test", () => {
  it("Article correctly obtained", async () => {
    const response = await getArticleAction("x");

    expect(response.title).toEqual("x");
    expect(response.content).toEqual("x");
  });

  it("Article not correctly obtained ", async () => {
    const response = await getArticleAction("x");

    expect(response).toEqual("Article not found");
  });
});
