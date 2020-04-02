import React from "react";
import "./ajax-loader.scss";

const AjaxLoader = props => (
    <>
        <div className="cssload-dots">
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12"></feGaussianBlur>
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
                        result="goo"
                    ></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
        </svg>
    </>
);

const AjaxLoaderBallDrop = props => (
    <div className="loader ajax">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 268.37 268.37">
            <defs>
                <linearGradient id="a" x1="892.17" y1="193.49" x2="936.49" y2="193.49" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#d0205d" />
                    <stop offset="1" stopColor="#eb752c" />
                </linearGradient>
                <linearGradient id="c" x1="736.24" y1="118.95" x2="771.71" y2="118.95" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#7ab9c3" />
                    <stop offset="1" stopColor="#df56ff" />
                </linearGradient>
                <linearGradient id="d" x1="923.71" y1="85.01" x2="943.27" y2="85.01" xlinkHref="#a" />
                <linearGradient id="b" x1="800.95" y1="26.99" x2="848.51" y2="26.99" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#eec516" />
                    <stop offset="1" stopColor="#eb48cf" />
                </linearGradient>
                <linearGradient id="e" x1="776.63" y1="108.01" x2="839.24" y2="108.01" xlinkHref="#a" />
                <linearGradient id="f" x1="793.78" y1="49.66" x2="853.02" y2="49.66" xlinkHref="#b" />
                <linearGradient id="g" x1="834.64" y1="194.8" x2="900.64" y2="194.8" xlinkHref="#a" />
                <linearGradient id="h" x1="834.84" y1="236.3" x2="881.87" y2="236.3" xlinkHref="#c" />
                <linearGradient id="i" x1="891.71" y1="123.13" x2="942.98" y2="123.13" xlinkHref="#b" />
                <linearGradient id="j" x1="897.42" y1="205.02" x2="932.86" y2="205.02" xlinkHref="#a" />
                <linearGradient id="k" x1="731.86" y1="114.85" x2="744.13" y2="114.85" xlinkHref="#c" />
                <linearGradient id="l" x1="941.53" y1="147.94" x2="952.79" y2="147.94" xlinkHref="#a" />
                <linearGradient id="m" x1="813.46" y1="56.18" x2="886.8" y2="56.18" xlinkHref="#b" />
                <linearGradient id="n" x1="737.01" y1="173.82" x2="772.19" y2="173.82" xlinkHref="#c" />
                <linearGradient id="o" x1="738.33" y1="180.66" x2="761.87" y2="180.66" xlinkHref="#c" />
                <linearGradient id="p" x1="833.08" y1="166" x2="899.41" y2="166" xlinkHref="#a" />
                <linearGradient id="q" x1="772.45" y1="219.87" x2="829.38" y2="219.87" xlinkHref="#c" />
                <linearGradient id="r" x1="749.77" y1="106.69" x2="807.32" y2="106.69" xlinkHref="#a" />
                <linearGradient id="s" x1="769.2" y1="176.01" x2="827.86" y2="176.01" xlinkHref="#c" />
                <linearGradient id="t" x1="774.4" y1="224.76" x2="815.26" y2="224.76" xlinkHref="#c" />
                <linearGradient id="u" x1="826.81" y1="220.32" x2="884.98" y2="220.32" xlinkHref="#c" />
                <linearGradient id="v" x1="936.64" y1="123.54" x2="943.41" y2="123.54" xlinkHref="#b" />
                <linearGradient id="w" x1="939.61" y1="144.79" x2="942.5" y2="144.79" xlinkHref="#b" />
                <linearGradient id="x" x1="905.2" y1="149.49" x2="943.41" y2="149.49" xlinkHref="#b" />
                <linearGradient id="y" x1="751.98" y1="59.65" x2="783.8" y2="59.65" xlinkHref="#a" />
                <linearGradient id="z" x1="861.07" y1="56.4" x2="915.75" y2="56.4" xlinkHref="#a" />
                <linearGradient id="A" x1="777.06" y1="165.5" x2="839.72" y2="165.5" xlinkHref="#a" />
                <linearGradient id="B" x1="844.16" y1="123.65" x2="900.79" y2="123.65" xlinkHref="#b" />
                <linearGradient id="C" x1="751.67" y1="60.27" x2="807.84" y2="60.27" xlinkHref="#a" />
                <linearGradient id="D" x1="812.78" y1="101.57" x2="886.58" y2="101.57" xlinkHref="#b" />
                <linearGradient id="E" x1="866.04" y1="39.86" x2="909.96" y2="39.86" xlinkHref="#a" />
                <linearGradient id="F" x1="892.16" y1="84.52" x2="942.1" y2="84.52" xlinkHref="#a" />
            </defs>

            <g data-name="Layer 1" id="ball" transform="translate(-700,0)">
                <path id="l_1" fill="url(#a)" d="M903.82 165.34l-11.09 53.57-.56 2.74 44.32-39.87-32.67-16.44z" />
                <path fill="url(#c)" d="M736.61 148.01l35.1-5.76-23.67-52.37-2.61 12.19-9.19 43.17.37 2.77z" />
                <path fill="url(#d)" d="M941.52 80.63L923.71 63l19.56 44.01-1.75-26.38z" />
                <path fill="url(#b)" d="M800.96 32.74l47.55-4.97-5.72-1.58-19.57-4.94-22.26 11.49z" />
                <path fill="url(#e)" d="M810.09 74.74l-33.46 66.55 17.87-2.77 44.74-7.33-29.15-56.45z" />
                <path fill="url(#f)" d="M853.02 30.31l-59.24 6.2 4.2 8.23 12.53 24.27 42.51-38.7z" />
                <path fill="url(#g)" d="M900.64 165.9l-66 34.07 54.04 23.73 11.96-57.8z" />
                <path fill="url(#h)" d="M881.87 229.13l-47.03 10.55 24.8 3.79 22.23-14.34z" />
                <path
                    fill="url(#i)"
                    d="M934.47 125.26l8.51-9.55-51.27-29.23 12.01 73.3 2.51-2.82 27.37-30.75.87-.95z"
                />
                <path fill="url(#j)" d="M897.41 220.96l24.2-9.5 11.25-22.38-35.45 31.88z" />
                <path fill="url(#k)" d="M731.86 112.75l3.19 23.67 4.48-21.05 4.6-22.1-12.27 19.48z" />
                <path
                    fill="url(#l)"
                    d="M942.89 157.38l-.99 10.51-.3 3.25-.07.69 11.26-22.39-4.77-18.05-2-7.33-1.97 20.92-1.16 12.4z"
                />
                <path fill="url(#m)" d="M828.9 72.8l57.89 8.85-4.04-6.99-25.7-43.96-43.59 39.68 15.44 2.42z" />
                <path fill="url(#n)" d="M772.19 145.21l-35.18 5.77.28 2.08 5.99 10.2 23.2 39.17 5.71-57.22z" />
                <path fill="url(#o)" d="M741.43 183.82l20.44 16.72-23.54-39.75 3.1 23.03z" />
                <path fill="url(#p)" d="M842.69 134.6l-9.61 62.8 50.27-25.95 16.06-8.32-56.72-28.53z" />
                <path fill="url(#q)" d="M772.45 208.09l43.36 25.22 8.03 4.64 5.54-36.16-56.93 6.3z" />
                <path fill="url(#r)" d="M773.89 139.8l21.18-41.87 12.25-24.36-57.55 12.55 6.61 14.92 17.51 38.76z" />
                <path fill="url(#s)" d="M775.06 146.69l-5.85 58.64 26.13-2.79 32.52-3.6-52.8-52.25z" />
                <path fill="url(#t)" d="M815.26 236.68l-24.83-14.58-16.03-9.26 16.64 20.14 24.22 3.7z" />
                <path fill="url(#u)" d="M832.34 202.24l-5.53 36.16 58.17-13.04-52.64-23.12z" />
                <path fill="url(#v)" d="M943.36 120.22l.05-.48-6.77 7.6" />
                <path fill="url(#w)" d="M939.61 160.19l.96-10.18 1.02-10.9.91-9.72" />
                <path
                    fill="url(#x)"
                    d="M942.5 129.39l.91-9.51-6.79 7.48-11.08 12.43-4.69 5.27-4.77 5.36-6.3 7.06-4.58 5.2 32.64 16.42 1.77-18.9 2.89-30.81z"
                />
                <path fill="url(#y)" d="M755.7 73.52l28.1-31.92-22.28 11.5-9.54 24.61 3.72-4.19z" />
                <path fill="url(#z)" d="M890.03 81.17l25.72-26-48.43-20.91-6.24-2.63 28.95 49.54z" />
                <path fill="url(#A)" d="M831.24 189.63l8.48-55.48-62.66 10.27 52.99 52.43 1.19-7.22z" />
                <path fill="url(#B)" d="M844.16 131.88l56.63 28.58-12.06-73.62-44.57 45.04z" />
                <path fill="url(#C)" d="M751.67 82.64l56.17-12.25-16.78-32.5-39.39 44.75z" />
                <path fill="url(#D)" d="M841.94 129.77l44.64-45.12-57.54-8.8-16.26-2.47 29.16 56.39z" />
                <path fill="url(#E)" d="M866.04 30.33l43.92 19.07-17.81-17.61-26.11-1.46z" />
                <path fill="url(#F)" d="M892.16 83.28l49.53 28.25.41.22-24.22-54.47-25.72 26z" />
            </g>
        </svg>
    </div>
);

export { AjaxLoader, AjaxLoaderBallDrop };
