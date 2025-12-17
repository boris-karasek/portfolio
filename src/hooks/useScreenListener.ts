import { useScreenStore } from "@/store/useScreenStore";
import { useEffect } from "react";

export function useScreenListener() {
    const setScreen = useScreenStore((s) => s.setScreen);

    useEffect(() => {
        function update() {
            const w = window.innerWidth;

            if(w < 640) setScreen("mobile");
            else if (w < 1280) setScreen("medium");
            else setScreen("desktop");
        }

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    },[setScreen]);
}