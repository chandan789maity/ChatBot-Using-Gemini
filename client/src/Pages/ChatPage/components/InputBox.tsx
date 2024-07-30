import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const InputBox: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [serverResponse, setServerResponse] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;

    console.log('Submitting message:', message); // Debugging line

    try {
      // Send the message to the server
      const response = await axios.post<{
        statusCode: number;
        data: string ;
        message: string;
      }>('http://localhost:8000/api/gemini/chat', { message });

      console.log('Server Response:', response.data); // Debugging line

      // Extract the server's response
      const serverMessage = response.data.data;
      console.log(serverMessage);
      setServerResponse(serverMessage); // Update state with the server response
      setMessage(''); // Clear the input box
    } catch (error) {
      console.error('Error sending message to server:', error);
      setServerResponse('Sorry, something went wrong.'); // Display error message
    }
  };

  return (
    <>
    <div>
      {/* Output of the response  */}
    <div className="mt-8 w-11/12 mx-auto max-sm:px-1 p-5 rounded-sm mb-4 max-sm:w-full">
        {serverResponse && (
          <div className="p-2 my-2 text-left">
            <div className="inline-block p-7 max-sm:px-4 max-sm:text-xs rounded-2xl text-sm bg-white text-slate-800 shadow-2xl shadow-cyan-400">
              <h1>{serverResponse}</h1>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex fixed bottom-10 justify-center max-sm:w-full mx-auto w-2/3 ">
        <div className="relative w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-2xl bg-transparent border border-gray-300 bg-slate-600 bg-opacity-40 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full max-sm:py-2 p-4 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
            placeholder="Ask me Anything"
            required
          />
        </div>
        <button
          type="submit"
          className="max-sm:px-2 ml-5 inline-flex items-center p-4 px-10 text-sm font-medium text-white bg-blue-700 rounded-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default InputBox;
