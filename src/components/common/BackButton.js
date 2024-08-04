import Link from "next/link";
import { BackIcon } from "@components";

export default function BackButton({ href = "#" }) {
    return (
        <Link href={href}>
            <div className="flex items-center gap-3 hover:text-primary">
                <BackIcon />
                <span className="font-bold mt-1">برگشت</span>
            </div>
        </Link>
    );
}
