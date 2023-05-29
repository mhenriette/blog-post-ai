import { OpenAIApi, Configuration } from "openai";
import { NextResponse } from "next/server";

export default async function generateBlog(req, res) {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 3600,
      prompt: "10 facts about Cillian Murphy",
    });
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("Cache-Control", "max-age=180000");
    res.status(200).json({ response: response.data.choices });
    // return NextResponse.json(data);
  } catch (error) {
    console.log({ error });
  }
}
