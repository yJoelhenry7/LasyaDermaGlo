"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Skeleton } from "@/components/Skeleton";

type ImageWithSkeletonProps = ImageProps & {
  /** Extra classes for the skeleton placeholder */
  skeletonClassName?: string;
  /** Wrapper around image + skeleton (needed when using fill) */
  wrapperClassName?: string;
};

/**
 * Next/Image with a pulse skeleton until the asset finishes loading.
 */
export function ImageWithSkeleton({
  className = "",
  skeletonClassName = "",
  wrapperClassName = "",
  alt,
  onLoad,
  fill,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  const image = (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );

  if (fill) {
    return (
      <>
        {!loaded && (
          <Skeleton
            className={`absolute inset-0 z-[1] rounded-[inherit] ${skeletonClassName}`}
          />
        )}
        {image}
      </>
    );
  }

  return (
    <span className={`relative inline-block overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <Skeleton
          className={`absolute inset-0 z-[1] ${skeletonClassName}`}
        />
      )}
      {image}
    </span>
  );
}
