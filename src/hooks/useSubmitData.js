import { useState } from "react";

export const useSubmitData = (url) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const submitData = async (data) => {
        setIsSubmitting(true);
        setResponse(null);
        setError(null);

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to submit data");
            }

            const result = await res.json();
            if (result && result.success) {
                // Adjust this based on your API's response structure
                setResponse(result.message || "Submission successful");
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { isSubmitting, response, error, submitData };
};
