import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ApiResponse} from "../utils/ApiResponse.js"
import dotenv from "dotenv";
dotenv.config();

// Set up the GEMINI Model
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to get the user response
async function run(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  //console.log(text);
  return text;
}
// Chat User function
export const ChatUser = asyncHandler(async (req, res) => {

  const userMessage = req.body.message;

  if (!userMessage) throw new ApiError(400, "Please enter the input");

  try {

    const response = await run(userMessage);
    //console.log(response)
    return res.status(201).json(
        new ApiResponse(200, response, "User registered Successfully")
    )

  } catch (error) {
    console.error("Error in ChatUser:", error);
    throw new ApiError(500, "Failed to process request");
  }
});
