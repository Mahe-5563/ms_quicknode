import { Metadata } from "next";
import LoginSignup from "@/components/LoginSignup";

export const metadata: Metadata = {
  title: `Create your account`,
  description: "Generated by create next app",
};

export default function SignupPage() {
  return (
    <main>
      <LoginSignup type="signup" />
    </main>
  );
}