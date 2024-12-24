import { Github, Twitter, Youtube, Book, MessageSquare, Newspaper, HelpCircle } from 'lucide-react';

export const footerNavigation = {
  resources: [
    { name: 'Documentation', href: '/docs', icon: Book },
    { name: 'Blog', href: '/blog', icon: Newspaper },
    { name: 'Support', href: '/support', icon: HelpCircle },
  ],
  community: [
    { name: 'Community', href: '/community', icon: MessageSquare },
    { name: 'GitHub', href: 'https://github.com/Snigdha-OS', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  ],
};