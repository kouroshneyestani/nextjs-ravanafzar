export default function Container({ children, className }) {
    return (
        <div
            className={`container mx-auto max-w-[1100px] px-20 xl:px-0 ${className}`}
        >
            {children}
        </div>
    );
}
