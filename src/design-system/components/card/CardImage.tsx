import type { FunctionComponent } from 'react';

export type CardImageProps = { src: string; alt: string };

export const CardImage: FunctionComponent<CardImageProps> = ({ src, alt }) => (
	<img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
);
