'use client'
import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, ...props }) {
    const { pending } = useFormStatus();

    return (
        <Button {...props} disabled={pending}>
            <span>{children}</span>
        </Button>
    );
}