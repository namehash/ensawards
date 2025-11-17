
export interface ValidationErrors {
    [key: string]: string;
}

export interface FormField {
    label: string;
    type: "text" | "url";
    required: boolean;
}