import React from "react";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <section className="w-full px-4 py-16 bg-gray-50 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* heading section */}
          <div>
            <p className="mb-2 text-sm font-medium text-purple-600">
              ACHIEVE MORE
            </p>
            <h2 className="w-full text-3xl font-bold text-gray-900 md:w-4/5 md:text-4xl">
              Purpose of a convoy is to keep your team
            </h2>
          </div>

          {/* bullet points */}

          <div className="grid justify-between grid-cols-1 col-span-2 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4 ">
                <div className="flex items-center justify-start w-12 h-12 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
