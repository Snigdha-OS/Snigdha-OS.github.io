export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  command: string;
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Nmap',
    description: 'Network exploration tool and security scanner',
    category: 'Information Gathering',
    command: 'nmap',
  },
  {
    id: '2',
    name: 'Wireshark',
    description: 'Network protocol analyzer for real-time packet capture',
    category: 'Sniffing & Spoofing',
    command: 'wireshark',
  },
  {
    id: '3',
    name: 'Metasploit',
    description: 'Penetration testing framework',
    category: 'Exploitation Tools',
    command: 'msfconsole',
  },
  {
    id: '4',
    name: 'Burp Suite',
    description: 'Web vulnerability scanner and proxy tool',
    category: 'Web Applications',
    command: 'burpsuite',
  },
  {
    id: '5',
    name: 'Aircrack-ng',
    description: 'Complete suite for wireless network security assessment',
    category: 'Wireless Attacks',
    command: 'aircrack-ng',
  },
  {
    id: '6',
    name: 'John the Ripper',
    description: 'Password cracker and hash analyzer',
    category: 'Password Attacks',
    command: 'john',
  },
];

export const categories = [
  'All',
  'Information Gathering',
  'Sniffing & Spoofing',
  'Exploitation Tools',
  'Web Applications',
  'Wireless Attacks',
  'Password Attacks',
];