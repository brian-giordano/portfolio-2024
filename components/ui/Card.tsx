import React from "react";
import Image from "next/legacy/image";
import { StaticImageData } from "next/legacy/image";
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import Pill from "./Pill";

export interface StackUsed {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
}

export interface StyledThumbnailConfig {
  useStyled: boolean;
  accentColor?: string;
  bgGradient?: string;
  projectImageUrl?: string | StaticImageData;
}

export interface CardProps {
  imageUrl?: string | StaticImageData;
  logoUrl?: string;
  videoUrl?: string;
  title: string;
  alt: string;
  orgName: string;
  orgLink?: string;
  startMonth?: string;
  startYear?: string;
  endMonth?: string;
  endYear?: string;
  description: JSX.Element;
  stackUsed?: StackUsed[];
  moreDetails?: JSX.Element;
  sizes?: string;
  objectPosition?: string;
  thumbnailConfig?: StyledThumbnailConfig;
  onOpen?: () => void;
  preTitleElement?: JSX.Element;
  actionText?: string;
  actionIconPrefix?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  logoUrl,
  title,
  alt,
  orgName,
  orgLink,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  stackUsed = [],
  moreDetails,
  sizes = "(max-width: 1024px) 100vw, 1024px",
  objectPosition = "center",
  thumbnailConfig,
  onOpen,
  preTitleElement,
  actionText = "Visit Site",
  actionIconPrefix,
}) => {
  const imageSource = imageUrl || logoUrl;
  const isProjectCard = !startMonth && !startYear && !endMonth && !endYear;

  const useStyledThumbnail = thumbnailConfig?.useStyled && isProjectCard;
  const hasVisual = useStyledThumbnail || Boolean(imageSource);
  const showImageContainer = isProjectCard && hasVisual;

  return (
    <div className="flex flex-col bg-charcoal rounded-xl border border-transparent transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,215,0,0.08)] hover:border-gold/20 p-4 sm:p-6 md:p-8 group h-full relative z-10 w-full">
      {showImageContainer && (
        <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg group">
          {useStyledThumbnail ? (
            <>
              {thumbnailConfig?.projectImageUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${thumbnailConfig.projectImageUrl})`,
                    backgroundPosition: objectPosition,
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              {orgLink && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/70 group-hover:backdrop-blur-sm transition-all duration-300">
                  <a
                    href={orgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-darkSlate font-bold py-3 px-6 rounded-full flex items-center shadow-xl"
                  >
                    {actionText} {actionIconPrefix && <span className="ml-2 mr-1">{actionIconPrefix}</span>} <FaExternalLinkAlt className="ml-3" />
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <Image
                src={imageSource as string | StaticImageData}
                alt={alt}
                layout="fill"
                objectFit="cover"
                objectPosition={objectPosition}
                className="transition-transform duration-500 group-hover:scale-105"
                sizes={sizes}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              {orgLink && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/70 group-hover:backdrop-blur-sm transition-all duration-300">
                  <a
                    href={orgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-darkSlate font-bold py-3 px-6 rounded-full flex items-center shadow-xl"
                  >
                    {actionText} {actionIconPrefix && <span className="ml-2 mr-1">{actionIconPrefix}</span>} <FaExternalLinkAlt className="ml-3" />
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {preTitleElement}

      <h2 className="font-primary font-semibold text-gold uppercase text-lg mb-3">
        {title}
      </h2>

      <h3 className="font-subheader text-base text-ivoryWhite mb-2">
        {orgLink && isProjectCard ? (
          <a
            href={orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition flex items-center"
          >
            {orgName} <FaExternalLinkAlt className="ml-2 text-sm" />
          </a>
        ) : (
          orgName
        )}
      </h3>

      {(startMonth || startYear) && (
        <p className="text-sm text-silverMist mb-6">
          {`${startMonth || ""}${startMonth && startYear ? "/" : ""}${
            startYear || ""
          }`}
          {(endMonth || endYear) &&
            ` - ${endMonth || ""}${endMonth && endYear ? "/" : ""}${
              endYear || ""
            }`}
        </p>
      )}

      <div className="mb-0 text-silverMist text-sm leading-relaxed">
        {description}
      </div>

      {stackUsed.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 md:gap-3">
          {stackUsed.map((tech) => (
            <Pill key={tech.name} text={tech.name} category={tech.category} />
          ))}
        </div>
      )}

      {moreDetails && (
        <div className="mt-6">
          <button
            onClick={onOpen}
            className="text-gold hover:text-ivoryWhite flex items-center text-sm font-medium"
          >
            More Details <FaChevronRight className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
