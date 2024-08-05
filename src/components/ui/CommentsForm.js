import { Input, Button } from "@components";

export default function CommentsForm({ className }) {
    return (
        <div className={className}>
            <div className="flex flex-col gap-5">
                <div className="w-full flex gap-5">
                    <div className="w-full">
                        <Input id="name" insideLabel="نام:" />
                    </div>
                    <div className="w-full">
                        <Input id="email" insideLabel="ایمیل:" />
                    </div>
                </div>
                <div>
                    <Input
                        type="textarea"
                        id="message"
                        insideLabel="دیدگاه شما:"
                    />
                </div>
                <div className="pt-2">
                    <Button size="sm" color="black">
                        دیدگاه خود را بفرستید
                    </Button>
                </div>
            </div>
        </div>
    );
}
