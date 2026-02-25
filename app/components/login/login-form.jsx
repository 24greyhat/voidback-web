"use client";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoginForm() {
  return (
    <form className="space-y-6" role="form" aria-label="Login form">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className="bg-input h-11"
          required
          aria-required="true"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="bg-input h-11"
          required
          aria-required="true"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" name="remember" className="rounded border-border" aria-label="Remember me" />
          <span className="text-muted-foreground font-medium">Remember me</span>
        </label>
        <a href="#" className="text-foreground hover:underline font-medium">
          Forgot password?
        </a>
      </div>

      <Link to="/dashboard">
        <Button className="w-full bg-primary hover:bg-primary/90 h-11 font-semibold" type="submit">
          Sign in
        </Button>
      </Link>
    </form>
  );
}