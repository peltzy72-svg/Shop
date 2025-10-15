import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              AEON Online
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 bg-secondary/30 border-none focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "EN" ? "KH" : "EN")}
              className="hidden sm:flex"
            >
              {language}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button size="sm" className="hidden sm:flex">
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10 bg-secondary/30 border-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
