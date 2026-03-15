"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

interface FavoriteButtonProps {
  initialState?: boolean;
}

export function FavoriteButton({ initialState = false }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialState);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorited(!isFavorited);
      }}
      className="p-3 bg-white/90 backdrop-blur-sm shadow-clay-sm hover:shadow-clay-sm-hover rounded-full text-rose-500 transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Toggle favorite"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isFavorited ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          className="w-5 h-5"
          fill={isFavorited ? "currentColor" : "none"}
          strokeWidth={isFavorited ? 0 : 2}
        />
      </motion.div>
    </motion.button>
  );
}
