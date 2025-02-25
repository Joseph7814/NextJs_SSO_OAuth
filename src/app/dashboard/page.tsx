"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {token ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="font-medium">Access Token:</p>
          <code className="break-all">{token}</code>
        </div>
      ) : (
        <p>No token found. Please log in again.</p>
      )}
    </div>
  );
}
