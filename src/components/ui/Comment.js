import Image from "next/image";

export default function Comment({
    stars,
    image,
    title,
    subtitle,
    description,
    className,
}) {
    return (
        <div className={className}>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                    <Image
                        src={image}
                        width={45}
                        height={45}
                        className="rounded-full"
                    />
                    <h4 className="font-bold">{title}</h4>
                </div>
                <div className="flex flex-col gap-5">
                    {description && <p>{description}</p>}
                </div>
            </div>
        </div>
    );
}
