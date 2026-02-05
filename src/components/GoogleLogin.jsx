import { useGoogleLogin } from '@react-oauth/google';

export default function GoogleLogin({ onSuccess }) {
    // 1. Initialize the custom login hook
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // Note: Custom buttons return an access_token by default
            const token = tokenResponse.access_token;

            try {
                // Optional: Fetch profile data if your backend needs it
                const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const profile = await userInfoRes.json();

                // Send the token (and profile if needed) to your API
                const res = await fetch("/api/auth/google-login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token, profile }),
                });

                const data = await res.json();
                if (data.status) {
                    onSuccess(data);
                } else {
                    console.error("Login failed:", data.message);
                }
            } catch (err) {
                console.error("Error during login flow:", err);
            }
        },
        onError: () => console.error('Google Login Failed'),
    });

    return (
        <div style={{ width: '100%' }}>
            {/* 2. Your exact button structure */}
            <button
                onClick={() => login()} // This triggers the popup
                type="button"
                className="w-full border py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-gray-50 transition-colors"
            >
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-5"
                    alt="Google"
                />
                Sign up with Google
            </button>
        </div>
    );
}
