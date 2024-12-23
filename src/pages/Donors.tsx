import { useEffect, useState } from 'react';
import { Heart, PieChart } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

async function getGitHubUserData(username: string): Promise<{ name: string; avatar_url: string }> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`User not found: ${username}`);
    }
    const data = await response.json();
    return {
      name: data.name || username, // Use GitHub name or fallback to username
      avatar_url: data.avatar_url || '',
    };
  } catch (error) {
    console.error(error);
    return { name: username, avatar_url: '' }; // Return username if there is an error
  }
}

function useGitHubDonors(usernames: string[]): { [key: string]: { name: string; avatar_url: string } } {
  const [donors, setDonors] = useState<{ [key: string]: { name: string; avatar_url: string } }>({});

  useEffect(() => {
    const fetchDonors = async () => {
      const donorData: { [key: string]: { name: string; avatar_url: string } } = {};
      for (let username of usernames) {
        const data = await getGitHubUserData(username);
        donorData[username] = data;
      }
      setDonors(donorData);
    };

    fetchDonors();
  }, [usernames]);

  return donors;
}

export function Donors() {
  const donorUsernames = [
    "eshanized", 
    "TIAsCode", 
    "IXINTL",
  ];

  const donorData = useGitHubDonors(donorUsernames);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Heart className="h-16 w-16 text-[#6495ed] mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 text-[#6495ed]">Our Amazing Donors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Snigdha OS is made possible thanks to the generous support of our donors. We are grateful for their contributions to keep our project running.
          </p>
        </section>

        {/* Donor List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#6495ed]">Donors List</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorUsernames.map((donor) => (
              <div key={donor} className="flex items-center gap-4">
                {donorData[donor]?.avatar_url ? (
                  <img
                    src={donorData[donor].avatar_url}
                    alt={donorData[donor].name}
                    className="h-12 w-12 rounded-full"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gray-300"></div> // Placeholder if no avatar
                )}
                <div>
                  <span className="font-semibold">{donorData[donor]?.name || donor}</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    <a
                      href={`https://github.com/${donor}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      @{donor}
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Become a Donor */}
        <section className="bg-[#6495ed] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            <FaRupeeSign className="inline-block h-6 w-6 text-green-500 mr-2" />
            Become a Donor
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Your support helps us maintain and improve Snigdha OS. Every donation, big or small, makes a difference in keeping our project independent and sustainable.
          </p>
          <button className="bg-[#6495ed] text-white px-8 py-3 rounded-[5px] hover:bg-[#6495ed] transition-colors">
            Make a Donation
          </button>
        </section>

        {/* Yearly Report */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-[#6495ed]">
            <PieChart className="inline-block h-6 w-6 text-[#6495ed] mr-2" />
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
                <h3 className="font-bold mb-4 text-[#6495ed]">How Donations Are Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <UsageCard
                    percentage={40}
                    category="Development"
                    description="Supporting core developers and infrastructure"
                    icon={<PieChart className="h-6 w-6 text-[#6495ed]" />}
                  />
                  <UsageCard
                    percentage={35}
                    category="Server Costs"
                    description="Maintaining mirrors and websites"
                    icon={<PieChart className="h-6 w-6 text-[#6495ed]" />}
                  />
                  <UsageCard
                    percentage={25}
                    category="Community"
                    description="Supporting community projects and events"
                    icon={<PieChart className="h-6 w-6 text-[#6495ed]" />}
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
      <h3 className="font-bold text-xl mb-4 text-[#6495ed]">{month}</h3>
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
        <span className="ml-2 text-xl font-semibold text-[#6495ed]">
          {percentage}%
        </span>
      </div>
      <h4 className="font-regular mb-1 text-[#6495ed]">{category}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
