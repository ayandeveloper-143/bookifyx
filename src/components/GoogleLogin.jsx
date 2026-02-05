import { useEffect } from "react";

export default function GoogleLogin({ onSuccess }) {
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("googleBtn"),
            {
                theme: "outline",
                size: "large",
                width: "100%",
                text: "signin_with",
                shape: "rect",
                logo_alignment: "left",
            }
        );

    }, []);

    function handleCredentialResponse(response) {
        // Google JWT Token (ID Token)
        const token = response.credential;

        // Send to backend
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
    }

    return <div id="googleBtn"></div>;
}
