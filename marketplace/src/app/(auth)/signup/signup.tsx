"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, Link } from "lucide-react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Create an account for free</h1>

      <div className="grid gap-6">
        <form>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              className={cn({ "focus-visible:ring-red-500": true })}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
        </form>
      </div>

      <Link className={buttonVariants({ variant: "link" })} href="/signin">
        Already have and account? Sign-in <ArrowRight />
      </Link>
    </>
  );
};

export default page;
