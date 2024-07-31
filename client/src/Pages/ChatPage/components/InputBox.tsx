import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const InputBox: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [interactions, setInteractions] = useState<{ question: string, answer: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;

    console.log('Submitting message:', message); // Debugging line
    setLoading(true);

    // Temporarily add the question with an empty answer
    setInteractions((prev) => [...prev, { question: message, answer: '' }]);
    const currentIndex = interactions.length;

    try {
      // Send the message to the server
      const response = await axios.post<{
        statusCode: number;
        data: string;
        message: string;
      }>('https://servergeminibot.onrender.com/api/gemini/chat', { message });

      console.log('Server Response:', response.data); // Debugging line

      // Extract the server's response
      const serverMessage = response.data.data;
      console.log(serverMessage);

      // Update the interaction with the received answer
      setInteractions((prev) => {
        const newInteractions = [...prev];
        newInteractions[currentIndex].answer = serverMessage;
        return newInteractions;
      });
    } catch (error) {
      console.error('Error sending message to server:', error);
      setInteractions((prev) => {
        const newInteractions = [...prev];
        newInteractions[currentIndex].answer = 'Server is not running on render.';
        return newInteractions;
      });
    } finally {
      setLoading(false);
      setMessage(''); // Clear the input box
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        {/* Output of the interactions */}
        <div className="mt-8 w-11/12 mx-auto max-sm:px-1 p-5 rounded-sm mb-16 max-sm:w-full">
          {interactions.map((interaction, index) => (
            <div key={index} className="p-2 my-2 text-left flex flex-col">
              <div className="flex justify-end mb-1">
                <div className="bg-violet-900 dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-3xl rounded-tr p-3 max-w-1/2 max-sm:px-4 max-sm:text-xs text-sm  text-white shadow-2xl shadow-cyan-400">
                  <p>{interaction.question}</p>
                </div>
              </div>
              {loading && index === interactions.length - 1 && (
                <div className="flex justify-end mt-4 mb-1 mr-4 ">
                  <div className="flex flex-row gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                  </div>
                </div>
              )}
              {interaction.answer && (
                <div className="flex justify-end mb-1">
                  <div className="dark:bg-black dark:bg-opacity-85 dark:text-white  p-5 font-sans max-w-full max-sm:px-5 max-sm:py-3 max-sm:text-xs rounded-3xl rounded-tr text-sm bg-cyan-100 bg-opacity-45 text-slate-800 shadow-2xl shadow-cyan-400 mt-1">
                    <p>{interaction.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="  flex fixed bottom-10 justify-center w-1/2 max-sm:w-full">
          <div className="relative w-full flex items-center">
            <div className='flex flex-grow max-sm:mx-4'>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" dark:text-white dark:bg-black dark:bg-opacity-45 w-full outline-none focus:border-indigo-400 focus:border-[1px] bg-white text-sm px-5 py-3 rounded-l-3xl max-sm:px-3 max-sm:py-3 shadow-2xl shadow-cyan-400"
              placeholder="Ask me Anything"
              required
            />
            <button
              type="submit"
              className="flex items-center p-4 max-sm:px-3 max-sm:py-3 px-7 text-sm font-medium text-white bg-violet-900 rounded-r-3xl max-sm:text-xs focus:border-indigo-400 focus:border-[1px] shadow-cyan-400"
            >
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>

    </>
  );
};

export default InputBox;
