export default function LoginPage() {
    return (
      <div>
        <h2 className="text-blue-50">Login to Spotify to Continue</h2>
        <a href="/api/auth/login" className="text-green-500 visited:text-green-500">Click me to login with spotify :D </a>
      </div>
    );
  }
  