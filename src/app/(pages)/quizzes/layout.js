import { StepProvider } from "../../../contexts/StepperContext";

export default function Layout({ children }) {
    return <StepProvider>{children}</StepProvider>;
}
