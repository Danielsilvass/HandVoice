import { useEffect, useState } from "react";
export function useIsMobile () {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

        useEffect(() => {
                const media = window.matchMedia("(max-width: 1000px)");
                        const handler = (e) => setIsMobile(e.matches);
                                media.addEventListener("change", handler);
                                        return () => media.removeEventListener("change", handler);
                                            }, []);

                                                return isMobile;
                                                }