export const LongArrowLeft = ({
    width = "100%",
    height = "100%",
    color = "currentcolor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        width={width}
        height={height}
        fill={color}
        {...props}
    >
        <path d="M5 25 L95 25 L95 28 L18 28 L38 43 L33 48 L5 25 L33 2 L38 7 L18 22 L95 22 L95 25 Z" />
    </svg>
);

export const LongArrowRight = ({
    width = "100%",
    height = "100%",
    color = "currentcolor",
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        width={width}
        height={height}
        fill={color}
        {...props}
    >
        <path d="M95 25 L5 25 L5 22 L82 22 L62 7 L67 2 L95 25 L67 48 L62 43 L82 28 L5 28 L5 25 Z" />
    </svg>
);
