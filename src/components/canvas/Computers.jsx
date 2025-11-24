import React from "react";

const ComputersCanvas = () => {
  return (
    <div className="w-full h-[380px] xs:h-[420px] sm:h-[520px] md:h-[600px] mt-10">
      <iframe
        title="Embedded 3D Model"
        src="https://3dwarehouse.sketchup.com/embed/b0856ca5c0956ee1c8717832e69c4b1c?token=RAdAojRfg7c=&binaryName=s21"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
        className="w-full h-full rounded-2xl border-0"
        loading="lazy"
        allow="autoplay; fullscreen; xr-spatial-tracking"
      />
    </div>
  );
};

export default React.memo(ComputersCanvas);
