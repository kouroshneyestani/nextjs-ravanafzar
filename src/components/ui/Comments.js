import { Comment, CommentsForm } from "@components";

export default function Comments({ data }) {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <div className="flex flex-col gap-10 overflow-hidden">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="border-b-[1px] border-overlay -mb-[1px] pb-10"
                    >
                        <Comment {...item} />
                    </div>
                ))}
            </div>
            <CommentsForm className="border-[1px] border-overlay rounded-default p-10" />
        </div>
    );
}
