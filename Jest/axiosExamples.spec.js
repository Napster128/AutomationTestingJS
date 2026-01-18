import axios from "axios";
const sourceNasa = "https://api.nasa.gov/";
const users = "https://web.archive.org/web/20200109213230/https://reqres.in";
const swagger = "https://petstore.swagger.io/v2/";
let pet = 11;
const params = {
  api_key: "xkQWv4DmUYsNdCh52vwFYhnfVhuJfZdkEKgFhrl3",
};
describe("Axios examples api test suite", () => {
  it("Nasa status code front page", async () => {
    const response = await axios.get(sourceNasa);
    expect(response.status).toBe(200);
  });
  it("Nasa status code planetary page, params autorization", async () => {
    const response = await axios.get(sourceNasa + "planetary/apod", { params });
    expect(response.status).toBe(200);
  });
  it("Nasa planetary page, media type check", async () => {
    const response = await axios.get(sourceNasa + "planetary/apod", { params });
    expect(response.data.media_type).toBe("image");
  });
  it("post, create user from anather source", async () => {
    const response = await axios.post(users + "/api/users", {
      name: "dummy",
      job: "frontend",
    });
    expect(response.status).toBe(200); // 201
  });
  it("Get pet by custom id, interpalation", async () => {
    const response = await axios.get(swagger + `pet/${pet}`);
    expect(response.status).toBe(200);
    expect(response.data.tags[0].id).toBe(0);
  });
});
