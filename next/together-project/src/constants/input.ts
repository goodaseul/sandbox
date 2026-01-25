export const INPUT_TYPES = ["email", "password", "text", "file"] as const;

export type InputType = (typeof INPUT_TYPES)[number];
