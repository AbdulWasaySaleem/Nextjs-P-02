'use client'
import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import { buttonVariants } from "./ui/button";
import { Blocks } from 'lucide-react';
import Cart from "./Cart";

const Navbar = () => {
  const user = null; 

  return (
    <div className="bg-red-200 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <WidthWrapper>
          <div className="border-b border-gray-200 flex justify-evenly items-center py-2">
            {/* Phone Section */}
            <div className="flex h-6 items-center">{/* TODO: PHONE */}</div>

            {/* Logo Section */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <p className="h-10 w-10 flex items-center justify-center"> <Blocks size={24} /> </p>
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {!user && (
                  <>
                    <Link href="/signin" className={buttonVariants({ variant: "ghost" })}>
                      Signin
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link href="/signup" className={buttonVariants({ variant: "ghost" })}>
                      Create Account
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </>
                )}
                <div className="ml-4 flow-root lg:ml-6">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
