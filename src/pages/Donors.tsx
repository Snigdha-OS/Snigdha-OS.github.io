import { Heart, Trophy, PieChart } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

export function Donors() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Our Amazing Donors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Snigdha OS is made possible thanks to the generous support of our
            donors. We are grateful for their contributions to keep our project
            running.
          </p>
        </section>

        {/* Donation Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Trophy className="inline-block h-6 w-6 text-yellow-500 mr-2" />
            Donation Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DonationTier
              title="Platinum Donors"
              amount="₹500+"
              icon={<Trophy className="h-6 w-6 text-gray-500" />}
              color="bg-gradient-to-r from-gray-200 to-gray-100"
              donors={[
                "TechCorp International",
                "Global Systems Ltd",
                "Future Computing Inc",
              ]}
            />
            <DonationTier
              title="Gold Donors"
              amount="₹100-₹499"
              icon={<Trophy className="h-6 w-6 text-yellow-500" />}
              color="bg-gradient-to-r from-yellow-100 to-yellow-50"
              donors={[
                "Sarah Johnson",
                "Michael Chang",
                "DataFlow Solutions",
                "Robert Wilson",
                "Emma Thompson",
              ]}
            />
            <DonationTier
              title="Silver Donors"
              amount="$₹10-₹99"
              icon={<Trophy className="h-6 w-6 text-gray-400" />}
              color="bg-gradient-to-r from-gray-100 to-white"
              donors={[
                "Rajesh Kumar",
"Priya Sharma",
"Aryan Patel",
"Meena Iyer",
"Vikram Singh",
                // "And many more...",
              ]}
            />
          </div>
        </section>

        {/* Become a Donor */}
        <section className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <FaRupeeSign className="inline-block h-6 w-6 text-green-500 mr-2" />
            Become a Donor
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support helps us maintain and improve Snigdha OS. Every donation,
            big or small, makes a difference in keeping our project independent and
            sustainable.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-[5px] hover:bg-indigo-700 transition-colors">
            Make a Donation
          </button>
        </section>

        {/* Yearly Report */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            <PieChart className="inline-block h-6 w-6 text-blue-500 mr-2" />
            Yearly Donation Report
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <YearlyStats
                month="Year - 2024"
                amount={15750}
                donors={14}
                averageDonation={1125}
              />
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">How Donations Are Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <UsageCard
                    percentage={40}
                    category="Development"
                    description="Supporting core developers and infrastructure"
                    icon={<PieChart className="h-6 w-6 text-green-500" />}
                  />
                  <UsageCard
                    percentage={35}
                    category="Server Costs"
                    description="Maintaining mirrors and websites"
                    icon={<PieChart className="h-6 w-6 text-blue-500" />}
                  />
                  <UsageCard
                    percentage={25}
                    category="Community"
                    description="Supporting community projects and events"
                    icon={<PieChart className="h-6 w-6 text-indigo-500" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type DonationTierProps = {
  title: string;
  amount: string;
  color: string;
  icon: React.ReactNode;
  donors: string[];
};

function DonationTier({
  title,
  amount,
  color,
  icon,
  donors,
}: DonationTierProps) {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${color}`}>
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{amount}</p>
      <ul className="space-y-2">
        {donors.map((donor, index) => (
          <li key={index} className="text-gray-700">{donor}</li>
        ))}
      </ul>
    </div>
  );
}

type YearlyStatsProps = {
  month: string;
  amount: number;
  donors: number;
  averageDonation: number;
};

function YearlyStats({
  month,
  amount,
  donors,
  averageDonation,
}: YearlyStatsProps) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">{month}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Donations</p>
          <p className="text-2xl font-bold">₹{amount.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Number of Donors</p>
          <p className="text-2xl font-bold">{donors}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Average Donation</p>
          <p className="text-2xl font-bold">₹{averageDonation}</p>
        </div>
      </div>
    </div>
  );
}

type UsageCardProps = {
  percentage: number;
  category: string;
  description: string;
  icon: React.ReactNode;
};

function UsageCard({
  percentage,
  category,
  description,
  icon,
}: UsageCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        {icon}
        <span className="ml-2 text-xl font-semibold text-indigo-600">
          {percentage}%
        </span>
      </div>
      <h4 className="font-regular mb-1">{category}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
