"use client";

import { useState } from "react";

const dummyMessages = [
  {
    id: 1,
    sender: "Alice",
    subject: "Welcome to Forge Realm!",
    body: "Hi there! We're excited to have you on board. Let us know if you need any help getting started.",
    date: "2024-06-09",
    read: false,
  },
  {
    id: 2,
    sender: "Bob",
    subject: "Weekly Update",
    body: "Here's a summary of your recent activity and what's new in the marketplace.",
    date: "2024-06-08",
    read: true,
  },
  {
    id: 3,
    sender: "Forge Realm Team",
    subject: "Security Update",
    body: "We have rolled out new security features for your account. Please review your settings.",
    date: "2024-06-07",
    read: false,
  },
];

export default function InboxPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedMessage = dummyMessages.find(msg => msg.id === selectedId);

  return (
    <div className="flex flex-col md:flex-row bg-white w-full h-full rounded-xl shadow-md overflow-hidden md:mx-4 mt-6">
      {/* Sidebar/message list */}
      <aside className="w-full md:w-1/3 max-h-[60vh] md:max-h-none overflow-y-auto border-b md:border-b-0 md:border-r border-gray-200 shrink-0 bg-gray-50">
        <h2 className="p-4 text-xl font-bold border-b border-gray-200 bg-white">Inbox</h2>
        <ul>
          {dummyMessages.map(msg => (
            <li
              key={msg.id}
              onClick={() => setSelectedId(msg.id)}
              className={`cursor-pointer transition-colors border-b border-gray-100 px-4 py-3 hover:bg-indigo-50 ${
                selectedId === msg.id ? "bg-indigo-100" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${!msg.read ? "text-indigo-800" : "text-gray-700"}`}>{msg.sender}</span>
                <span className="text-xs text-gray-400">{msg.date}</span>
              </div>
              <div className={`mt-1 text-sm truncate ${!msg.read ? "font-bold" : ""}`}>
                {msg.subject}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Message read pane */}
      <main className="flex-1 p-6 flex flex-col justify-center items-center bg-white min-h-[350px]">
        {selectedMessage ? (
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">{selectedMessage.subject}</h3>
              <span className="text-xs text-gray-500">{selectedMessage.date}</span>
            </div>
            <div className="mt-1 text-sm text-gray-600 mb-4">From: <span className="font-medium">{selectedMessage.sender}</span></div>
            <div className="text-md text-gray-700 whitespace-pre-wrap bg-gray-50 rounded-md p-4">{selectedMessage.body}</div>
            <button
              className="mt-6 text-indigo-700 hover:underline text-sm"
              onClick={() => setSelectedId(null)}
            >
              &larr; Back to all messages
            </button>
          </div>
        ) : (
          <div className="text-gray-400 text-center flex flex-col items-center justify-center w-full min-h-[200px]">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-indigo-100"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              viewBox="0 0 48 48"
            >
              <rect x="8" y="14" width="32" height="24" rx="3" fill="currentColor" className="text-indigo-50"/>
              <path
                d="M8 14l16 12 16-12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-200"
              />
            </svg>
            <span className="font-medium">Select a message to read</span>
            <p className="text-xs mt-1 text-gray-300">Your latest notifications will appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
}
