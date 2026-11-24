import React from 'react';

// Main application shell wrapper
// TODO: Render header, notification banners, and responsive content area
export default function AppShell({ children }) {
  return <div className="app-shell">{children}</div>;
}
