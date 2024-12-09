"use client";

import { useState } from "react";


const events = [
  {
    id: 1,
    title: "Plant Care Workshop",
    date: "2024-12-10",
    time: "3:00 PM - 5:00 PM",
    description: "Learn essential plant care tips from experts!",
    location: "Community Garden, Downtown",
    registrationLink: "#",
  },
  {
    id: 2,
    title: "Houseplants Webinar",
    date: "2024-12-15",
    time: "6:00 PM - 7:30 PM",
    description: "Join our virtual webinar to explore the world of houseplants.",
    location: "Online (Zoom)",
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Annual Plant Show",
    date: "2025-01-05",
    time: "10:00 AM - 4:00 PM",
    description: "A showcase of the best plants and garden products.",
    location: "Botanical Garden, City Center",
    registrationLink: "#",
  },
];

const EventPage = () => {
  const [showDetails, setShowDetails] = useState<number | null>(1);

  const handleToggleDetails = (eventId: number) => {
    setShowDetails(showDetails === eventId ? null : eventId);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-center text-green-700 dark:text-green-500 mb-12">
        Upcoming Plant Events
      </h1>

      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300">
                {event.title}
              </h2>
              <button
                onClick={() => handleToggleDetails(event.id)}
                className="text-sm text-green-500 hover:underline dark:text-green-400"
              >
                {showDetails === event.id ? "Hide Details" : "View Details"}
              </button>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {event.date} | {event.time}
            </p>

            {showDetails === event.id && (
              <div className="mt-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">{event.description}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <strong>Location:</strong> {event.location}
                </p>
                <a
                  href={event.registrationLink}
                  className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
                >
                  Register Now
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default EventPage;
