import { HeaderBackButton } from "@components";

export default function Layout({ children }) {
    return (
        <>
            <HeaderBackButton href="/quizzes" />
            <div className="pb-16 w-full h-screen flex flex-col items-center justify-center">
                {children}
            </div>
        </>
    );
}
