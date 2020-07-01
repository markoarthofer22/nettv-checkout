import React from "react";

const SvgIcon = ({ icon, iconclass, pureSvg }) => {
    if (pureSvg) {
        return <svg className={`icon ${iconclass ? iconclass : ""}`} dangerouslySetInnerHTML={{ __html: pureSvg }} />;
    } else {
        return (
            <svg className={`icon ${iconclass ? iconclass : icon}`}>
                {/* Production */}
                <use xlinkHref={`/shop/assets/icons-v7.svg#${icon}`} />
                {/* <use xlinkHref={`/assets/icons-v7.svg#${icon}`} /> */}
            </svg>
        );
    }
};

export default SvgIcon;
