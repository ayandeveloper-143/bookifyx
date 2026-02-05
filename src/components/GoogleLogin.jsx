import { GoogleLogin as GoogleLoginButton } from '@react-oauth/google';

export default function GoogleLogin({ onSuccess }) {
    const handleSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        fetch("/api/auth/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    onSuccess(data);
                } else {
                    console.error("Login failed:", data.message);
                }
            });
    };

    return (
        <div style={{ width: '100%' }}>
            <GoogleLoginButton
                onSuccess={handleSuccess}
                onError={() => console.error('Google Login Failed')}
                width="100%"
                theme="outline"
                size="large"
                text="signin_with"
                shape="rect"
                logo_alignment="left"
            />
        </div>
    );
}
