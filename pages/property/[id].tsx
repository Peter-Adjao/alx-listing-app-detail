// pages/property/[id].tsx
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find property by name (or consider switching to ID if available)
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center text-red-500 mt-10">Property not found</p>;

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto p-4 md:p-6">
        {/* Grid layout: Left - details/reviews; Right - booking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyDetail property={property} />
            <ReviewSection reviews={property.reviews} />
          </div>

          <div className="lg:col-span-1">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
