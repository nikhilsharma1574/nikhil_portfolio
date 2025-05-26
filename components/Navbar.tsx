"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavbarPage() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Experience",
      link: "#Experience",
    },
    {
      name: "Achievements",
      link: "#Achievements",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar rounded-box shadow-base-300/20 shadow-sm px-12 py-4">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">NS</a>
            <div className="md:hidden">
              <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? (
                  <span className="icon-[tabler--x] size-4"></span>
                ) : (
                  <span className="icon-[tabler--menu-2] size-4"></span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="default-navbar-collapse"
          className={cn(
            "md:navbar-end collapse grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full",
            isMobileMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block w-full">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === "Projects" ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          <li>
                            <NavigationMenuLink href="#web-projects">
                              Web Projects
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink href="#mobile-projects">
                              Mobile Projects
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink href={item.link}>
                      {item.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}