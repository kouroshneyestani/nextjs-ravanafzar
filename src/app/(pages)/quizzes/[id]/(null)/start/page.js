import { StepProvider } from "@contexts/StepperContext";
import { Stepper } from "@components";

export default function Page() {
    return (
        <StepProvider>
            <Stepper
                redirect={"/#"}
                className="w-lvw max-w-xl h-screen flex flex-col gap-10 justify-end mx-auto select-none"
            />
        </StepProvider>
    );
}
