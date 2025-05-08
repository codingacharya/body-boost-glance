
import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 container py-6">{children}</main>
      <footer className="py-4 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          FitTrack © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
