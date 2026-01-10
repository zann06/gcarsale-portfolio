'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type ImageWithFallbackProps = Omit<ImageProps, 'src'> & {
  src?: string;
  fallbackSrc?: string;
};

export default function ImageWithFallback({
  src,
  fallbackSrc = '/placeholder.svg',
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackSrc);

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
