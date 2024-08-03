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
            setResponse(result.message || "Submission successful");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { isSubmitting, response, error, submitData };
};
