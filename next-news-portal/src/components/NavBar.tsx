"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Switch } from "./ui/switch";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname()
   
  return (
    <header className=" py-4 bg-white text-gray-900 transition-colors duration-300 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className={`hover:text-gray-600 ${pathname === '/news' ? 'text-gray-950 font-semibold' : ''}`}>
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="text-gray-600 shadow-md rounded-md py-4 space-y-2">
                  <li>
                    <NavigationMenuLink
                      href="/services/web-development"
                      className={`hover:text-gray-600 `}
                    >
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/mobile-apps"
                      className="hover:text-gray-600"
                    >
                      Mobile Apps
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/services/seo"
                      className="hover:text-gray-600"
                    >
                      SEO
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={`hover:text-gray-600 ${pathname === '/about' ? 'text-gray-950 font-semibold' : ''}`}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className={`hover:text-gray-600 ${pathname === '/contact' ? 'text-gray-950 font-semibold' : ''}`}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login btn */}
        <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <span>Dark Mode</span>
                <Switch/>
            </div>
            <Button className="px-6">Login</Button>
        </div>

        {/* hamburger menu for mobile */}
        <MobileMenu/>


      </nav>
    </header>
  );
};

export default NavBar;
