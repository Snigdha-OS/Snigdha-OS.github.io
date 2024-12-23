import React, { useEffect, useState } from 'react';
import { Download as DownloadIcon, Monitor, Server, HardDrive, Smartphone } from 'lucide-react';

export function DownloadPage() {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [userRegion, setUserRegion] = useState<string | null>(null);

  // Detect user location using a public API
  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserLocation(`${data.city}, ${data.country}`);
        setUserRegion(data.country); // Store the user's country or region
      } catch (error) {
        console.error('Failed to fetch user location:', error);
        setUserLocation(null);
        setUserRegion(null);
      }
    }
    fetchLocation();
  }, []);

  // Find the closest mirror based on the user's region
  const getSuggestedMirror = () => {
    if (!userRegion) return null; // If region is not detected, return null
  
    // Normalize userRegion to handle cases like "United States" vs. "USA"
    const regionMap: { [key: string]: string } = {
      "united states": "north america",
      "canada": "north america",
      "brazil": "south america",
      "argentina": "south america",
      "germany": "europe",
      "france": "europe",
      "india": "asia",
      "japan": "asia",
      "south africa": "africa",
      "australia": "australia",
    };
  
    // Lowercase the userRegion for more lenient matching
    const normalizedRegion = regionMap[userRegion.toLowerCase()] || userRegion.toLowerCase();
  
    // Find the closest mirror based on the user's region
    return mirrorData.find((mirror) =>
      mirror.region.toLowerCase().includes(normalizedRegion)
    );
  };
  
  const suggestedMirror = getSuggestedMirror();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-[#6495ed]">
            Download Snigdha OS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the edition that best suits your needs. All versions are free
            to download and use, providing the best experience for developers,
            students, and professionals alike.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <FeatureBadge color="#6495ed" text="Lightweight & Fast" />
              <FeatureBadge color="#6495ed" text="Open Source & Free" />
              <FeatureBadge color="#6495ed" text="Customizable & Secure" />
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Snigdha OS is designed to provide an unparalleled experience,
              whether you're working on an older device or a high-end system.
              Built with efficiency, reliability, and beauty in mind, it’s
              perfect for home users, professionals, and enterprises. Download
              today to unlock the full potential of your hardware.
            </p>
          </div>
        </section>

        {/* Edition Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {editionData.map((edition, index) => (
            <EditionCard key={index} {...edition} />
          ))}
        </section>

        {/* System Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#6495ed]">
            System Requirements
          </h2>
          <div className="rounded-lg p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <SystemRequirements
                title="Minimum Requirements"
                specs={[
                  '2GB RAM (4GB recommended)',
                  '20GB of disk space (100GB recommended)',
                  '1024×768 resolution',
                ]}
                notes="These are the minimum requirements to run Snigdha OS smoothly. For basic tasks such as web browsing, office applications, and media playback, this setup is sufficient."
              />
              <SystemRequirements
                title="Recommended Requirements"
                specs={[
                  '4GB RAM or more',
                  '100GB of disk space or more',
                  '1920×1080 resolution or higher',
                ]}
                notes="These specifications provide an optimal experience, enabling smooth performance for multitasking, using modern applications, and running resource-intensive tasks like video editing or gaming."
              />
            </div>
          </div>
        </section>

        {/* Download Mirrors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Download Mirrors
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Select a mirror closest to your location for faster download speeds.{' '}
            <br />
            {userLocation ? (
              <span className="text-gray-600 font-regular">
                Your detected location: <span className="text-green-600 font-bold">{userLocation}</span>
              </span>
            ) : (
              <span>Detecting your location...</span>
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mirrorData.map((mirror, index) => (
              <MirrorButton key={index} {...mirror} />
            ))}
          </div>
          {suggestedMirror && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-[#6495ed]">
                Suggested Mirror for You
              </h3>
              <MirrorButton {...suggestedMirror} />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// Components
function FeatureBadge({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <span
      className={`inline-block px-4 py-2 text-sm bg-[${color}] text-white rounded-[5px] shadow-md`}
    >
      {text}
    </span>
  );
}

function EditionCard({
  title,
  description,
  keyFeatures,
  idealFor,
  icon,
  recommended,
}: {
  title: string;
  description: string;
  keyFeatures: string[];
  idealFor: string;
  icon: React.ReactNode;
  recommended?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 relative ${
        recommended ? 'border-2 border-[#6495ed]' : ''
      }`}
    >
      {recommended && (
        <div className="absolute top-4 right-4 bg-[#6495ed] text-white px-2 py-1 rounded-[5px] text-sm">
          Recommended
        </div>
      )}
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-bold text-[#6495ed]">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#6495ed]">Ideal For:</h4>
        <p className="text-gray-600 text-sm">{idealFor}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="flex items-center space-x-2 bg-[#6495ed] text-white px-6 py-2 rounded-[5px] hover:bg-[#4169e1] transition-colors">
          <DownloadIcon className="h-5 w-5" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

function SystemRequirements({
  title,
  specs,
  notes,
}: {
  title: string;
  specs: string[];
  notes: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
      <h3 className="text-xl font-bold text-[#6495ed]">{title}</h3>
      <ul className="space-y-3 text-gray-700">
        {specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <p className="mt-4 text-gray-600 text-sm">{notes}</p>
    </div>
  );
}

function MirrorButton({
  region,
  speed,
  host,
  url,
  suggested = false,  // Added 'suggested' prop to highlight the suggested mirror
}: {
  region: string;
  speed: string;
  host: string;
  url: string;
  suggested?: boolean; // Optional prop to check if this is the suggested mirror
}) {
  const speedColor = {
    'Very Fast': 'text-green-500',
    Fast: 'text-blue-500',
    Moderate: 'text-orange-500',
  }[speed];

  return (
    <a
      href={url}
      className={`block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200 ${suggested ? 'border-2 border-[#6495ed] bg-[#e6f0ff]' : ''}`}
    >
      <div className="flex flex-col space-y-3">
        <div className="text-center">
          <h3 className="text-xl font-bold">{region}</h3>
          <p className="text-sm">{host}</p>
        </div>
        <div className="text-center">
          <span className={`font-semibold ${speedColor}`}>{speed}</span>
        </div>
        <button className="bg-[#6495ed] text-white py-2 px-4 rounded-lg">
          Download
        </button>
        {suggested && (
          <div className="absolute top-2 right-2 bg-[#6495ed] text-white text-sm px-2 py-1 rounded-lg">
            Suggested Mirror
          </div>
        )}
      </div>
    </a>
  );
}

// Data
const editionData = [
  {
    title: 'Gnome Edition',
    description: 'Modern, innovative features while being traditional and familiar.',
    keyFeatures: ['Dynamic Workspaces', 'Extensible Extensions', 'Built-in Accessibility'],
    idealFor: 'General users who prefer a sleek and functional desktop experience.',
    icon: <Monitor className="h-12 w-12 text-[#6495ed]" />,
    recommended: true,
  },
  {
    title: 'MATE Edition',
    description: 'Traditional desktop experience, highly stable and reliable.',
    keyFeatures: ['Low Resource Usage', 'Consistent Workflow', 'Legacy Support'],
    idealFor: 'Users who value simplicity and reliability over modern features.',
    icon: <Server className="h-12 w-12 text-[#6495ed]" />,
  },
  {
    title: 'Xfce Edition',
    description: 'Lightweight and stable. Perfect for older computers.',
    keyFeatures: ['Minimal Resource Usage', 'Fast Boot Times', 'Highly Customizable'],
    idealFor: 'Users with older hardware or those who need maximum performance.',
    icon: <HardDrive className="h-12 w-12 text-[#6495ed]" />,
  },
  {
    title: 'KDE Plasma Edition',
    description: 'Feature-rich, eye-catching, and offers tons of customization.',
    keyFeatures: ['Cutting-edge Visuals', 'Full Customization', 'Highly Extensible'],
    idealFor: 'Power users who want control and beauty in equal measure.',
    icon: <Smartphone className="h-12 w-12 text-[#6495ed]" />,
  },
];

// Example of mirrorData (you can add more mirrors as needed)
const mirrorData = [
  {
    region: 'North America (USA)',
    speed: 'Very Fast',
    host: 'ExampleMirrorHost.com',
    url: 'https://example.com/download',
  },
  {
    region: 'Europe (Germany)',
    speed: 'Fast',
    host: 'EU-Mirror.com',
    url: 'https://eu-mirror.com/download',
  },
  {
    region: 'Asia (India)',
    speed: 'Moderate',
    host: 'IN-Mirror.com',
    url: 'https://in-mirror.com/download',
  },
];
