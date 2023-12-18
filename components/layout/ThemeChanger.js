import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div>
            {theme == "light" ? (
                <button onClick={() => setTheme("dark")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
						<g clip-path="url(#clip0_768_4833)">
							<path opacity="0.3" d="M12 27.1792C12 30.3792 13.24 33.3792 15.52 35.6592C17.78 37.9392 20.8 39.1792 24 39.1792V10.1992L15.52 18.6992C13.24 20.9592 12 23.9792 12 27.1792Z" fill="black"/>
							<path d="M35.32 15.8591L24 4.53906L12.68 15.8591C6.44 22.0991 6.44 32.2391 12.68 38.4791C15.8 41.5991 19.9 43.1591 24 43.1591C28.1 43.1591 32.2 41.5991 35.32 38.4791C41.56 32.2391 41.56 22.0991 35.32 15.8591ZM24 39.1791C20.8 39.1791 17.78 37.9391 15.52 35.6591C13.24 33.3791 12 30.3791 12 27.1791C12 23.9791 13.24 20.9591 15.52 18.6991L24 10.1991V39.1791Z" fill="black"/>
						</g>
						<defs>
							<clipPath id="clip0_768_4833">
							<rect width="48" height="48" fill="white"/>
							</clipPath>
						</defs>
					</svg>
                </button>
            ) : (
                <button onClick={() => setTheme("light")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
						<g clip-path="url(#clip0_768_4833)">
							<path d="M35.32 15.8591L24 4.53906L12.68 15.8591C6.44 22.0991 6.44 32.2391 12.68 38.4791C15.8 41.5991 19.9 43.1591 24 43.1591C28.1 43.1591 32.2 41.5991 35.32 38.4791C41.56 32.2391 41.56 22.0991 35.32 15.8591ZM24 39.1791C20.8 39.1791 17.78 37.9391 15.52 35.6591C13.24 33.3791 12 30.3791 12 27.1791C12 23.9791 13.24 20.9591 15.52 18.6991L24 10.1991V39.1791Z" fill="#26A69A"/>
						</g>
						<defs>
							<clipPath id="clip0_768_4833">
							<rect width="48" height="48" fill="white"/>
							</clipPath>
						</defs>
					</svg>
                </button>
            )}
        </div>
    );
};

export default ThemeChanger;
