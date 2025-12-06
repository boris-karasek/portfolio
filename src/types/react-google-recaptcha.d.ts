declare module "react-google-recaptcha" {
  import { Component } from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    size?: "compact" | "normal" | "invisible";
    theme?: "light" | "dark";
    onChange?: (value: string | null) => void;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    executeAsync(): Promise<string | null>;
    reset(): void;
  }
}
