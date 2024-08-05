"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const result = searchParams.get("result");

    // Safely parse the result if it's present and handle potential errors
    let parsedResult = null;
    if (result) {
        try {
            parsedResult = JSON.parse(result);
        } catch (error) {
            console.error("Error parsing JSON from result:", error);
            parsedResult = null; // or set to some default value
        }
    }

    return (
        <div>
            <h1>Results Page</h1>
            {parsedResult ? (
                <div>
                    {/* Render your result here */}
                    <p>Result: {JSON.stringify(parsedResult)}</p>
                </div>
            ) : (
                <p>No result data found or error parsing data.</p>
            )}
        </div>
    );
}
