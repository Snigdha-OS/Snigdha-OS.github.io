import React, { useEffect, useState } from "react"; // Importing React, the useEffect hook for side effects, and useState hook for managing component state.
import { Heart, Users, Shield, Package, Coffee } from "lucide-react"; // Importing icons from the `lucide-react` library for use in UI components.

interface TeamMember {
  // Defining a TypeScript interface to describe the structure of team member data.
  login: string; // GitHub username.
  avatar_url: string; // URL to the user's avatar image.
  html_url: string; // URL to the user's GitHub profile.
  name: string; // User's name.
  bio: string; // User's bio or description.
  location: string; // User's location.
  company: string; // User's associated company or organization.
}

export function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); 
  // Initializing `teamMembers` state as an empty array to store the team member details.
  
  const [loading, setLoading] = useState(true); 
  // `loading` state is used to track whether the data fetching process is ongoing.

  useEffect(() => {
    // useEffect is a React hook that runs a side effect (in this case, fetching data) after the component renders.
    
    const fetchTeamMembers = async () => {
      // Declaring an asynchronous function to fetch team member data.
      try {
        // Starting the `try` block to handle potential errors during the API requests.

        // List of GitHub usernames of the team members.
        const teamUsernames = [
          "eshanized",
          "d3v1l0n",
          "iconized",
          "alokified",
          "utkrshift",
        ];

        // Mapping over the array of usernames and creating an array of fetch promises.
        const fetchProfiles = teamUsernames.map(async (username) => {
          // `fetch` sends an HTTP GET request to the GitHub API for each username.
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (!response.ok) {
            // If the HTTP response status is not OK (e.g., 404 or 500), throw an error.
            throw new Error(`Failed to fetch data for ${username}`);
          }
          return await response.json(); // Parse the JSON response and return the data.
        });

        const teamData = await Promise.all(fetchProfiles);
        // `Promise.all` waits for all fetch requests to resolve, resulting in an array of user data.
        
        setTeamMembers(teamData);
        // Update the `teamMembers` state with the fetched data.
      } catch (error) {
        // Handle any errors that occurred during the fetch process.
        console.error("Error fetching team members:", error); // Log the error for debugging purposes.
      } finally {
        setLoading(false); 
        // Set the `loading` state to false, indicating that the fetch process is complete.
      }
    };

    fetchTeamMembers();
    // Call the `fetchTeamMembers` function when the component mounts.
  }, []); 
  // The empty dependency array `[]` ensures this effect runs only once when the component mounts.


  return (
    <div className="py-16 bg-gradient-to-b from-[#F7F9FC] to-[#E6EBF1]">
      <div className="container mx-auto px-4">

        {/* Mission Section */}
<section className="mb-16 text-center bg-gradient-to-r from-[#6495ed] via-[#85b1f3] to-[#eaf3fc] py-16 rounded-lg shadow-lg">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
      About <span className="text-[#eaf3fc]">Snigdha OS</span>
    </h1>
    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
      Snigdha OS is a modern, elegant, and efficient Linux distribution designed to be lightweight and 
      developer-friendly. Built on Arch Linux with the Zen kernel, it offers a powerful and secure platform 
      for both personal use and penetration testing.
    </p>
    <div className="mt-8">
      <a
        href="#features"
        className="inline-block px-8 py-3 text-lg font-semibold bg-white text-[#6495ed] rounded-full shadow-md hover:bg-[#f0f4f8] hover:shadow-lg transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package className="h-12 w-12 text-teal-500 transition-transform transform hover:scale-110" />}
              title="Fast & Lightweight"
              description="Snigdha OS is designed to run efficiently on both older hardware and modern systems, ensuring excellent performance with minimal resource usage."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-green-500 transition-transform transform hover:scale-110" />}
              title="Security First"
              description="Snigdha OS focuses on providing robust security with regular updates, patches, and user privacy as top priorities."
            />
            <FeatureCard
              icon={<Coffee className="h-12 w-12 text-yellow-500 transition-transform transform hover:scale-110" />}
              title="Developer Friendly"
              description="Packed with a rich set of tools for developers, Snigdha OS ensures smooth development and testing, especially in security-related tasks."
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="h-12 w-12 text-red-500 transition-transform transform hover:scale-110" />}
              title="Passion for Open Source"
              description="Our community-driven approach means that Snigdha OS is constantly evolving, with contributions from developers and users worldwide."
            />
            <ValueCard
              icon={<Users className="h-12 w-12 text-blue-500 transition-transform transform hover:scale-110" />}
              title="Community Empowerment"
              description="We believe in empowering the community by encouraging collaboration, innovation, and open dialogue around the development of Snigdha OS."
            />
            <ValueCard
              icon={<Shield className="h-12 w-12 text-green-500 transition-transform transform hover:scale-110" />}
              title="Security & Privacy"
              description="Snigdha OS is built with the philosophy of safeguarding user data and ensuring that privacy remains a top priority."
            />
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">Roadmap</h2>
          <div className="space-y-6">
            <TimelineItem
              year="Q1 2025"
              title="User Interface Overhaul"
              description="Introducing a more intuitive and modern user interface with customizable features."
            />
            <TimelineItem
              year="Q2 2025"
              title="Security Enhancements"
              description="Improving system-level security, including advanced encryption support and better intrusion detection mechanisms."
            />
            <TimelineItem
              year="Q3 2025"
              title="Developer Tools Expansion"
              description="Snigdha OS will include more developer tools, including cloud-based IDEs and enhanced testing environments for penetration testers."
            />
            <TimelineItem
              year="Q4 2025"
              title="More Community Contributions"
              description="Increasing community-driven contributions with better documentation and support for new architectures."
            />
          </div>
        </section>

        {/* Contribution Guidelines Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">How You Can Contribute</h2>
          <div className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-8">
            <p>
              Whether you are a developer, designer, or simply passionate about Snigdha OS, there are many ways you can help the project grow. Contribute code, submit bug reports, or help improve the documentation.
            </p>
            <a
              href="https://github.com/Snigdha-OS/Snigdha-OS"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 bg-[#6495ed] text-white text-lg font-semibold rounded-lg hover:bg-[#5a82cc]"
            >
              View Contribution Guidelines
            </a>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">Success Stories</h2>
          <div className="space-y-8">
            <SuccessStory
              title="A Developer's Dream"
              description="Alex, a full-stack developer, shares how Snigdha OS transformed their workflow, offering a fast and secure environment to write code and run tests."
              link="https://github.com/alexdev"
            />
            <SuccessStory
              title="In the Classroom"
              description="Local schools have adopted Snigdha OS to give students an affordable, powerful, and secure OS for their coding and programming classes."
              link="https://github.com/education-department"
            />
          </div>
        </section>

        {/* Community & Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">Community & Resources</h2>
          <div className="text-center max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            <p>
              Join the Snigdha OS community to stay updated, contribute, and collaborate on new features. You can connect with us through our forums and GitHub.
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <a
                href="https://github.com/Snigdha-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6495ed] hover:text-[#5a82cc]"
              >
                GitHub Repository
              </a>
              <a
                href="https://www.snigdhaos.com/community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6495ed] hover:text-[#5a82cc]"
              >
                Community Forum
              </a>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-[#6495ed] mb-8 text-center">
            Meet the Leadership Team
          </h2>
          {loading ? (
            <p className="text-center text-gray-600">Loading team members...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.login}
                  name={member.name || member.login}
                  image={member.avatar_url}
                  profileUrl={member.html_url}
                  bio={member.bio || "Passionate about Linux and open-source software."}
                  location={member.location || "India"}
                  company={member.company || "TONMOY INFRASTRUCTURE"}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-50">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#6495ed] mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-50">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#6495ed] mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function SuccessStory({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-semibold text-[#6495ed]">{title}</h3>
      <p className="text-gray-700 my-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6495ed] hover:text-[#5a82cc]"
      >
        Read More
      </a>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex">
      <div className="w-24 font-semibold text-green-600">{year}</div>
      <div>
        <h3 className="font-semibold mb-1 text-[#6495ed]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function TeamMemberCard({
  name,
  image,
  profileUrl,
  bio,
  location,
  company,
}: {
  name: string;
  image: string;
  profileUrl: string;
  bio: string;
  location: string;
  company: string;
}) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#6495ed]"
      />
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{bio}</p>
      <p className="text-gray-500 text-sm mt-2">{location}</p>
      <p className="text-gray-500 text-sm mt-1">{company}</p>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#6495ed] hover:text-[#5a82cc] mt-2 inline-block"
      >
        View Profile
      </a>
    </div>
  );
}
