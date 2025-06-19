import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = ["Top Villa", "Self Checkin", "Private Pool"];

export default function Home() {
  return (
    <main className="p-6">
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/franc.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide</p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {filters.map((label, i) => (
          <Pill key={i} label={label} />
        ))}
      </div>

      {/* Listings Title */}
      <h1 className="text-2xl font-bold mt-8 mb-4">Property Listings</h1>

      {/* Property Listings Grid (dynamically rendered) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </div>
    </main>
  );
}
