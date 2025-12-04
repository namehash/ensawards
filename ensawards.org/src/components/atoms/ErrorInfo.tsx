import { AlertCircle as AlertIcon } from "lucide-react";

export interface ErrorInfoProps {
    title?: string;
    description?: string;
}

export function ErrorInfo({ title, description }: ErrorInfoProps) {
    return (
        <div>
            <div>
                <AlertIcon width={22} height={22} className="flex-shrink-0" />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
}