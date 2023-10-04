import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Places.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    return response.status(200).json(place);
  }

  if (request.method === "DELETE") {
    try {
      await Places.findByIdAndDelete(id);
      return response.status(200).json({ status: "Deleted" });
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  if (request.method === "PUT") {
    try {
      await Places.findByIdAndUpdate(id, request.body);
      return response.status(200).json({ status: "Updated" });
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
