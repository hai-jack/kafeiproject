"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";
import { MapPin } from "lucide-react";

interface PetCardProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  location: string;
  imageUrl: string;
  isNew?: boolean;
}

export function PetCard({
  id,
  name,
  breed,
  age,
  location,
  imageUrl,
  isNew = false,
}: PetCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-[#FFF7ED] rounded-3xl p-4 shadow-clay hover:shadow-clay-hover cursor-pointer border-2 border-transparent hover:border-[#F97316]/20 transition-all duration-300 w-full max-w-sm mx-auto flex flex-col gap-4"
    >
      {/* Image Container with inner shadow for depth */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-orange-100/50 shadow-inner">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="bg-[#10B981] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
              New
            </span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 z-10">
          <FavoriteButton />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-2 px-2 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-heading text-2xl font-bold text-[#9A3412] leading-tight">
            {name}
          </h3>
          <span className="bg-orange-100 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            {age}
          </span>
        </div>
        
        <p className="font-body text-[#9A3412]/70 font-medium text-sm">
          {breed}
        </p>

        <div className="flex items-center gap-1.5 mt-2 text-[#9A3412]/60 font-medium text-sm">
          <MapPin className="w-4 h-4 text-[#2563EB]" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </motion.div>
  );
}
