import { Container, LogoSVG, BackButton } from "@components";

export default function Header({ href = "#" }) {
    return (
        <header>
            <div className="w-full h-20 flex items-center top-0 left-0 fixed z-50">
                <Container>
                    <div className="flex items-center justify-between">
                        <div>
                            <LogoSVG />
                        </div>
                        <div>
                            <BackButton href={href} />
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}
