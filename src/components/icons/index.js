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

export const TomanIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            width,
            height,
            fill: color,
        }}
        width={14}
        height={14}
    >
        <defs>
            <symbol
                id="toman"
                className="font-thin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
            >
                <path
                    className="font-thin"
                    fillRule="evenodd"
                    d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                    clipRule="evenodd"
                />
            </symbol>
        </defs>
        <use xlinkHref="#toman" />
    </svg>
);

export const ClockIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Generated by IcoMoon.io */}
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 17 17"
        >
            <g></g>
            <path
                d="M9 2.025v-1.025h1.5v-1h-4v1h1.5v1.025c-3.902 0.26-7 3.508-7 7.475 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-3.967-3.098-7.215-7-7.475zM8.5 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zM9 9h4v1h-5v-4h1v3z"
                fill="#000000"
            />
        </svg>
    </>
);

export const QuestionIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Generated by IcoMoon.io */}
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 17 17"
        >
            <g></g>
            <path
                d="M10.311 14.831c0 0.898-0.73 1.628-1.629 1.628-0.902 0-1.631-0.73-1.631-1.628 0-0.9 0.729-1.63 1.631-1.63 0.898 0 1.629 0.73 1.629 1.63zM11.668 2.373c-0.512-0.645-1.444-1.414-2.983-1.414-4.098 0-4.245 3.758-4.246 3.796l1 0.026c0.003-0.115 0.11-2.822 3.246-2.822 1.14 0 1.825 0.563 2.199 1.035 0.555 0.7 0.7 1.508 0.624 1.833-0.291 1.229-1.011 1.877-1.773 2.563-0.935 0.841-1.9 1.71-1.9 3.558h1c0-1.402 0.692-2.026 1.569-2.815 0.804-0.724 1.715-1.544 2.077-3.078 0.149-0.634-0.083-1.76-0.813-2.682z"
                fill="#000000"
            />
        </svg>
    </>
);
export const BarChartIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Generated by IcoMoon.io */}
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 17 17"
        >
            <g></g>
            <path
                d="M17 16v1h-17v-1h17zM2 10h2v5h1v-6h-4v6h1v-5zM7 7h2v8h1v-9h-4v9h1v-8zM12 3h2v12h1v-13h-4v13h1v-12z"
                fill="#000000"
            />
        </svg>
    </>
);

export const BackButtonIcon = ({
    color = "currentColor",
    size = 24,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 19l7-7-7-7"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export const BackIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Generated by IcoMoon.io */}
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 17 17"
            {...props}
        >
            <g></g>
            <path
                d="M14.583 15v1h-7.083c-3.032 0-5.5-2.467-5.5-5.5s2.468-5.5 5.5-5.5h2.912l-2.646-2.646 0.707-0.707 3.853 3.853-3.853 3.854-0.707-0.708 2.646-2.646h-2.912c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h7.083z"
                fill={color}
            />
        </svg>
    </>
);

export const InfoIcon = ({
    width = 17,
    height = 17,
    color = "currentcolor",
    ...props
}) => (
    <>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        {/* Generated by IcoMoon.io */}
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 17 17"
            {...props}
        >
            <g></g>
            <path
                d="M10.8 14.276v1h-4.6v-1h1.8v-7.431h-1.75v-1h2.75v8.431h1.8zM7.988 4.045c0.848 0 1.532-0.686 1.532-1.532 0-0.847-0.685-1.534-1.532-1.534-0.849 0-1.534 0.687-1.534 1.534 0 0.846 0.686 1.532 1.534 1.532z"
                fill={color}
            />
        </svg>
    </>
);

export const SettingsIcon = ({ width = 16, height = 16 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d="M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z"
            fill="currentColor"
        />
    </svg>
);

export const StarIcon = ({
    width = 17,
    height = 17,
    color = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"
            fill={color}
        />
    </svg>
);

export const TestIcon = ({
    width = 17,
    height = 17,
    color = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"
            fill={color}
        />
    </svg>
);

export const PowerOffIcon = ({
    width = 17,
    height = 17,
    color = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d="M16 9.5c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5c0-3.498 2.476-6.579 5.888-7.326l0.214 0.977c-2.956 0.647-5.102 3.317-5.102 6.349 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-3.028-2.143-5.698-5.096-6.348l0.215-0.977c3.408 0.751 5.881 3.831 5.881 7.325zM9 0h-1v10h1v-10z"
            fill={color}
        />
    </svg>
);

export const ShineIcon = ({
    width = 17,
    height = 17,
    color = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d="M8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9 4h-1v-3h1v3zM8 13h1v3h-1v-3zM16 8v1h-3v-1h3zM4 9h-3v-1h3v1zM12.036 5.671l-0.707-0.707 2.121-2.121 0.707 0.707-2.121 2.121zM4.964 11.329l0.707 0.707-2.121 2.121-0.707-0.707 2.121-2.121zM12.036 11.329l2.121 2.121-0.707 0.707-2.121-2.121 0.707-0.707zM4.964 5.671l-2.121-2.121 0.707-0.707 2.121 2.121-0.707 0.707z"
            fill={color}
        />
    </svg>
);

export const MoonIcon = ({
    width = 24,
    height = 24,
    color = "currentColor",
}) => (
    <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1" />
    </svg>
);
export const ProfileIcon = ({
    width = 20,
    height = 20,
    color = "currentColor",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.33-8 4v1h16v-1c0-2.67-5.33-4-8-4z"
            fill="none"
            stroke={color}
            strokeWidth="1.2" // Adjusted stroke width
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const LogoSVG = (props) => {
    return (
        <div {...props} className="flex items-center">
            <span className="w-10 h-10 bg-primary rounded-full right-2 relative before:w-full before:h-full before:relative before:flex before:rounded-full before:-left-2 before:bg-yellow-400"></span>
            <span className="text-xl font-bold relative -right-2">
                روان ابزار
            </span>
        </div>
    );
};

export const CaretDownSVG = ({
    width = 9,
    height = 9,
    color = "currentColor",
}) => {
    return (
        <svg
            fill={color}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z" />
            </g>
        </svg>
    );
};
