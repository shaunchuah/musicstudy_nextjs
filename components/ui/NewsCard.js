import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({
  image,
  imageAlt,
  title,
  titleLink,
  date,
  children,
  imageRounded = "full", // Default to full rounded, can be "lg" for less rounded
}) => {
  // Determine the appropriate rounding class based on the imageRounded prop
  const roundingClass = imageRounded === "lg" ? "rounded-lg" : "rounded-full";
  
  return (
    <div className="bg-white text-gray-800 border p-4 md:p-6 rounded-lg shadow mb-6">
      <div className="md:flex flex-row gap-4 justify-center lg:justify-start items-start">
        {image && (
          <div className="w-1/3 md:w-1/4 flex-none mx-auto md:mx-0 mb-4 md:mb-0">
            <Image
              src={image}
              alt={imageAlt || "News image"}
              height="480"
              width="480"
              priority={true}
              className={roundingClass}
            />
          </div>
        )}
        <div>
          {title && (
            <h2 className="text-2xl mb-4">
              {titleLink ? (
                <Link href={titleLink} legacyBehavior>
                  <a className="hover:text-secondary">{title}</a>
                </Link>
              ) : (
                title
              )}
            </h2>
          )}
          {children}
        </div>
      </div>
      {date && (
        <div className="flex flex-row-reverse text-gray-700 text-sm mt-4">
          {date}
        </div>
      )}
    </div>
  );
};

export default NewsCard;