import fetchMock from "fetch-mock";
import { fetchData, updateData } from "./fetchData";

// Configures fetchMock before each test and clean it up afterwards.
beforeEach(() => {
    fetchMock.reset();
});

afterEach(() => {
    fetchMock.restore();
});

it("fetchData should fetch data from an endpoint", async () => {
    const mockResponse = { data: "testData" };

    // Mock successful response from API.
    fetchMock.getOnce("http://localhost:5000/testEndpoint", {
        body: JSON.stringify(mockResponse),
        headers: { "Content-Type": "application/json" },
    });

    const response = await fetchData("testEndpoint");

    expect(response).toEqual(mockResponse);
});

it("fetchData should handle errors when fetching data", async () => {
    // Mock an error response from API.
    fetchMock.getOnce("http://localhost:5000/testEndpoint", {
        throws: new Error("Fetch error"),
    });

    await expect(fetchData("testEndpoint")).rejects.toThrow("Fetch error");
});

it("updateData should update data at an endpoint", async () => {
    const mockResponse = { updatedData: "newData" };

    // Mock successful response from API.
    fetchMock.putOnce("http://localhost:5000/testEndpoint/1", {
        body: JSON.stringify(mockResponse),
        headers: { "Content-Type": "application/json" },
    });

    const updatedData = await updateData("testEndpoint", 1, { newData: "newData" });

    expect(updatedData).toEqual(mockResponse);
});

it("updateData should handle errors when updating data", async () => {
    // Mock an error response from API.
    fetchMock.putOnce("http://localhost:5000/testEndpoint/1", {
        throws: new Error("Update error"),
    });

    await expect(updateData("testEndpoint", 1, { newData: "newData" })).rejects.toThrow("Update error");
});