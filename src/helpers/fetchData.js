const ENDPOINT_URL = "http://localhost:5000/";

export const fetchData = async (page) => {
    try {
        const response = await fetch(`${ENDPOINT_URL}${page}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error fetching data from endpoint: ", error)
        throw error;
    }
}

export const updateData = async (page, id, data) => {
    try {
        const response = await fetch(`${ENDPOINT_URL}${page}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Error updating data");
        }
        const updatedData = await response.json();
        return updatedData;
    } catch (error) {
        console.log("Error updating data: ", error);
        throw error;
    }
};