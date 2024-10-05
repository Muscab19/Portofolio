import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMessageId, setExpandedMessageId] = useState(null); // State to track which message is expanded

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://portifolio-backend-erb1.onrender.com/api/send/messages'); // Adjust URL if needed
        setMessages(response.data);
      } catch (err) {
        setError('Failed to load messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://portifolio-backend-erb1.onrender.com/api/send/delete/messages/${id}`); // Adjust the delete URL
      setMessages(messages.filter(message => message._id !== id)); // Remove the deleted message from the state
    } catch (err) {
      setError('Failed to delete message');
    }
  };

  const toggleDetails = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id); // Toggle details display
  };

  if (loading) {
    return <p className="text-center text-2xl text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">{error}</p>;
  }

  return (
    <div className="p-6 bg-[#0A0919] text-white min-h-screen">
      <h2 className="text-5xl text-center font-bold mb-6">Messages</h2>
      {!messages || messages.length === 0 ? (
        <p className='text-center text-xl'>No messages found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div key={message._id} className="bg-[#1F2937] border border-[#FFB633] rounded-lg p-4 shadow-md transition-transform transform hover:scale-105">
              <h3 className="font-bold text-[#FFB633]">Name: {message.name || 'No Name'}</h3>
              <p><strong>Email:</strong> {message.email || 'No Email'}</p>
              
              {expandedMessageId === message._id && (
                <div className="mt-2">
                  <p><strong>Message:</strong> {message.message || 'No Message'}</p>
                  <p><strong>Date:</strong> {message.date ? new Date(message.date).toLocaleDateString() : 'No Date'}</p>
                </div>
              )}
              
              <div className="mt-2 flex justify-between">
                <button 
                  onClick={() => toggleDetails(message._id)}
                  className="bg-[#60A5FA] text-white px-4 py-2 rounded hover:bg-[#2563EB] transition duration-300"
                >
                  {expandedMessageId === message._id ? 'Hide Details' : 'Details'}
                </button>
                <button
                  onClick={() => handleDelete(message._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
