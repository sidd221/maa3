import React, { ButtonHTMLAttributes } from "react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { ArrowUpRight } from "lucide-react";

export type ButtonColorfulProps = {
    label?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    [key: string]: any;
};

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-10 px-4 overflow-hidden",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-primary via-secondary to-accent",
                    "opacity-40 group-hover:opacity-80 animate-border-gradient",
                    "blur transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
        </Button>
    );
}
