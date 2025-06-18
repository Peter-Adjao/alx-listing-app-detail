import Card from "@/components/common/Card";

export default function Home() {
  return (
    <main className="p-6">
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/franc.jpg')" }}
      >
        <div className=" bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worlwide</p>
        </div>
      </section>



      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
        
          title="Entire cabin"
          description="A beautiful beach house with an ocean view."
          image="/assets/house.png" rating={4.36}        />
        <Card
          title="Mountain Villa"
          description="A peaceful villa surrounded by mountains."
          image="/assets/beem.jpg" rating={4.57}        />
        <Card
          title="Beach House"
          description="Modern apartment in the heart of the city."
          image="/assets/farmers.jpg" // add this image to public/assets/
          rating={4.71}        />
        <Card
          title="City Apartment"
          description="Modern apartment in the heart of the city."
          image="/assets/naomi.jpg" // add this image to public/assets/
          rating={4.83}        />
        <Card
          title="City Apartment"
          description="Modern apartment in the heart of the city."
          image="/assets/gudak.jpg" // add this image to public/assets/
          rating={4.94}        />
      </div>
    </main>
  );
}
