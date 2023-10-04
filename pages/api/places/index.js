import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Places.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const place = await Places.create(request.body);
      return response.status(201).json(place);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
