export default function LoginPage() {
    return (
      <div className="bg-black text-center">
        <h2 className="text-green-500">Login to Spotify to Continue</h2>
        <a href="/api/auth/login" className="text-green-500 text-center visited:text-green-500 hover:underline">Click me to login with spotify :D </a>
      </div>
    );
  }
  