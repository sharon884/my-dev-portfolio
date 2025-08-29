// components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My App 🚀
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-6">
          Let’s check if this works without motion animations.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}
