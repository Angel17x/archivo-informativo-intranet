import * as React from 'react';

// const getMediaType = (url: string): string => {
//   if (!url || url.trim() === '') {
//     return 'unknown';
//   }
//   const extension = url.split('.').pop();
//   if (!extension) {
//     return 'unknown';
//   }
//   const cleanExtension = extension.split(/\#|\?/)[0];
//   if (['svg', 'png', 'jpg', 'jpeg'].indexOf(cleanExtension.toLowerCase())) {
//     return 'image';
//   }
//   return 'unknown';
// };
export const MediaDisplay: React.FC<{ url?: string, width: number, height: number }> = ({ url, width, height }: { url?: string, width: number, height: number }) => {

  // const mediaType = getMediaType(url);

  return <img src={url ?? require('../../assets/no-image.png')} alt="Descripción del contenido visual" width={width} height={height} style={{ maxWidth: '100%' }} />;
}

