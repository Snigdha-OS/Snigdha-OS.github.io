import React from 'react'; // Import the React library for creating React components.
import { Header } from './Header'; // Import the `Header` component from the specified file.
import { Footer } from './Footer'; // Import the `Footer` component from the specified file.

// Define the props type for the `Layout` component.
// `children` is a special React prop that represents the content passed between the opening and closing tags of the component.
interface LayoutProps {
  children: React.ReactNode; // `children` can be any valid React node (elements, strings, numbers, fragments, etc.).
}

// Define and export the `Layout` functional component, which accepts `LayoutProps` as props.
export function Layout({ children }: LayoutProps) {
  // Render the component structure.
  return (
    <div className="flex flex-col min-h-screen">
      {/* The main container is styled as a flexbox with a column direction and a minimum height to fill the screen. */}
      <Header /> {/* Render the `Header` component at the top of the layout. */}
      <main className="flex-grow">
        {/* Render the `children` prop inside the `main` section. 
            `flex-grow` allows this section to expand and take up the remaining available space. */}
        {children}
      </main>
      <Footer /> {/* Render the `Footer` component at the bottom of the layout. */}
    </div>
  );
}
