import dynamic from "next/dynamic";

const CustomSlider = dynamic(() => import("./SwiperComponent"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default CustomSlider;
