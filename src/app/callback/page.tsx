"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) {
        router.push("/login");
        return;
      }

      try {
        const tokenEndpoint = `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/oauth/token`;

        const response = await axios.post(tokenEndpoint, {
          grant_type: "authorization_code",
          client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
          code,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { access_token, scope } = response.data;

        if (access_token) {
          // Store token securely
          localStorage.setItem("access_token", access_token);
          document.cookie = `access_token=${access_token}; path=/; Secure; SameSite=Strict;`;

          console.log("Scopes granted:", scope);

          // Redirect to dashboard
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Token exchange failed:", error);
        router.push("/login");
      }
    };

    handleAuth();
  }, [router]);

  return <p>Authenticating... Please wait.</p>;
}
