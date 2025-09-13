// src/components/BusinessGatewayTable.jsx
import React from "react";

const businessEngagements = [
  {
    funding: "Technology Development Fund (TDF)",
    model: "Funding/Mechanism",
    purpose:
      "To fund the indigenous development of defence and dual-use technologies with a focus on self-reliance.",
    partner:
      "MSMEs and startups, especially those with innovative ideas and high-potential technologies.",
    details:
      "Grants-in-aid up to 90% of a project cost up to 250 crore, linked to milestones.",
  },
  {
    funding: "Technology Transfer (TOT)",
    model: "Engagement Model",
    purpose:
      "To enable the production and commercialization of a mature, DRDO-developed technology.",
    partner:
      "Established public or private companies with existing manufacturing capabilities and the capacity to scale production.",
    details: "Licensing fee for the technology.",
  },
  {
    funding: "DIA-COES",
    model: "Engagement Model",
    purpose:
      "To promote collaborative directed research on critical and futuristic technologies.",
    partner:
      "Companies with a strong R&D focus and existing partnerships with industry and academia, interested in co-developing intellectual property.",
    details:
      "Grants for collaborative projects, with participation as a Co-Pl.",
  },
  {
    funding: "Direct Procurement",
    model: "Engagement Model",
    purpose:
      "To acquire a wide range of goods and services through a tender-based process.",
    partner:
      "Businesses of all sizes that can supply and/or service a variety of needs, from construction and maintenance to general supplies.",
    details: "Tender-based contracts awarded on a competitive bidding basis.",
  },
];

const BusinessGatewayTable = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          The Business Gateway: How to Engage with DRDO
        </h2>
        <p className="text-gray-300 text-lg">Key Business Engagement Models</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Funding/Mechanism
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Engagement Model
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Primary Purpose
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Ideal Partner Profile
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {businessEngagements.map((item, index) => (
              <tr key={index} className="hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 text-gray-200 font-medium">
                  {item.funding}
                </td>
                <td className="px-6 py-4 text-gray-200">{item.model}</td>
                <td className="px-6 py-4 text-gray-300">{item.purpose}</td>
                <td className="px-6 py-4 text-gray-200">{item.partner}</td>
                <td className="px-6 py-4 text-gray-200">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessGatewayTable;
