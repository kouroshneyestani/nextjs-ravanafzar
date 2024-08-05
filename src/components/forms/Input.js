import { FormLabel } from "@mui/material";

export default function Input({ id, type = "text", placeholder, insideLabel }) {
    let height = "";

    switch (type) {
        case "text":
        case "email":
        case "password":
            height = "h-10";
            break;
        case "textarea":
            height = "min-h-32";
            break;
    }

    return (
        <div>
            <div className="w-full h-full flex flex-col gap-1">
                {insideLabel && (
                    <label className="font-bold whitespace-nowrap" htmlFor={id}>
                        {insideLabel}
                    </label>
                )}
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full bg-overlay rounded-default outline-none border-b-[3px] border-gray px-5 focus:border-primary ${height}`}
                />
            </div>
        </div>
    );
}
