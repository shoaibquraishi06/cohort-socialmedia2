// const { GoogleGenAI } = require("@google/genai");
// require('dotenv').config();

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });



// async function generateCaption(file) {
   
//     const contents = [
//         {
//             inlineData: {
//                 mimeType:file.mimetype,
//                 data: base64Image,
//             },
//         },
//         { text: "Caption this image." },
//     ];
//  const base64Image = new Buffer.from(file.buffer).toString('base64');
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: contents,
//     config:{
//         systemInstruction: `
//         you generate single caption for the image.
//         your caption should be shot and concise.
//         you use  hastages emojis in the caption.
//         create a aesthetic caption.
        
//         `
//     }

//   });
//   console.log(response.text);
// }

// module.exports = generateCaption;
