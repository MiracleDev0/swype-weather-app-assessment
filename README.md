Weather Now is a responsive weather application built with Next.js, TypeScript, and Tailwind CSS. It allows users to search any location and view accurate current conditions, hourly data, and 7-day forecasts using the Open-Meteo API (no API key required).

Installation Clone or navigate to the project directory:

cd /workspace/weather-app Install dependencies:

npm install Start the development server:

npm run dev Open your browser and visit http://localhost:3000

Tech Stack Framework: Next.js 15 (App Router) Language: TypeScript Styling: Tailwind CSS State Management: Redux Toolkit (RTK Query) Icons: Lucide React API: Open-Meteo Weather API Date Handling: date-fns

Architecture & Structure

I built this project using the Next.js App Router, following a modular, feature-based architecture. Each feature (location search, current weather, daily forecast, etc.) lives in its own component, which made the codebase easier to maintain, test, and expand.

I chose TypeScript from the start to ensure type safety and consistency throughout the app. It helped catch potential issues early and made the integration with the weather API more predictable and reliable.

State Management & API Handling

For state management and data fetching, I used Redux Toolkit with RTK Query. I specifically chose RTK Query because it simplifies API calls, handles caching automatically, and keeps the global state in sync with minimal boilerplate. This approach also allowed the UI to stay responsive while efficiently refetching updated weather data in the background.

The app uses the Open-Meteo API, which provides reliable forecasts without requiring authentication. I used its Geocoding API for location search and Forecast API for both hourly and daily data.

UI & Styling

I wanted the interface to feel clean, modern, and visually consistent across devices, so I used Tailwind CSS for styling. Its utility-first approach made it easy to rapidly prototype responsive layouts, while still keeping the design lightweight and maintainable.

To enhance the user experience, I integrated Radix UI primitives for accessible components and Lucide React icons for simple, elegant visuals. I also opted for a dark gradient background to give the app a polished, modern aesthetic.

Performance Considerations

Performance and user experience were key focuses. I leveraged Next.js static rendering and code splitting for fast initial loads, and RTK Query’s caching mechanism to reduce unnecessary API calls.