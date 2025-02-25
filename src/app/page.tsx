export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to OAuth 2.0 SSO</h1>
      <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded">
        Go to Login
      </a>
    </div>
  );
}
