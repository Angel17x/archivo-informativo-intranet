import * as React from 'react';

const getMediaType = (url: string): string => {
  if (!url || url.trim() === '') {
    return 'unknown';
  }
  const extension = url.split('.').pop();
  if (!extension) {
    return 'unknown';
  }
  const cleanExtension = extension.split(/\#|\?/)[0];
  if (['svg', 'png', 'jpg', 'jpeg'].indexOf(cleanExtension.toLowerCase())) {
    return 'image';
  }
  return 'unknown';
};

export const MediaDisplay: React.FC<{ url: string, width: string, height: string }> = ({ url, width, height }: { url: string, width: string, height: string }) => {

  const mediaType = getMediaType(url);

  switch (mediaType) {
    case 'image':
      return <img src={url} alt="Descripción del contenido visual" style={{ width: width, height: height, maxWidth: '100%' }} />;
    case 'video':
      return (
        <video width={width} height={height} controls>
          <source src={url} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      );
    case 'unknown':
    default:
      return <p>Formato de archivo no soportado.</p>;
  }
}

