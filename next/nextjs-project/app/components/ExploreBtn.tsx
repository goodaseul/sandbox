"use client";

import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button
            type="button"
            id="explore-btn"
            className="mx-auto mt-7"
            onClick={() => {
                console.log("CLICK");
            }}
        >
            {/* Link를 사용하면 불필요한 리렌더가 생김 그래서 같은 페이지에서 스크롤 이동시는 a 사용 */}
            <a href="#events">
                <Image width={24} height={24} src="/icons/arrow-down.svg" alt="" />
                ExploreBtn
            </a>
        </button>
    );
};

export default ExploreBtn;
