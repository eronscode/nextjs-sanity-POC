import { urlForImage } from "lib/sanity.image";
import Image from "next/image";

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
}

export default function ImageBox({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  size = "100vw",
  classesWrapper = "",
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).url();

  return (
    <div
      className={`w-full overflow-hidden rounded-[5px] bg-gray-50 ${classesWrapper}`}
    >
      {imageUrl && (
        <Image
          className=" h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  );
}
