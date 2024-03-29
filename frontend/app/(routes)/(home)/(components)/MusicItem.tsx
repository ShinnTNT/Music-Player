"use client";

import SoundWaveIcon from "@/components/ui/sound-wave-icon";

import { SelectMusic } from "@/lib/store/server/music/types";
import { cn } from "@/lib/utils";
import { Play } from "iconsax-react";
import Image from "next/image";

interface Props {
  item: SelectMusic;
  active: boolean;
  onPlayHandler: (id: number) => void;
}

export default function MusicItem({ item, active, onPlayHandler }: Props) {
  return (
    <div
      onClick={() => onPlayHandler(item.id)}
      className={cn(
        `w-full pr-6 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-700 hover:bg-opacity-20`,
        active && "bg-gray-700 bg-opacity-20"
      )}
    >
      <div className="flex gap-4 items-center">
        <Image
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-md"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-300">{item.name}</div>
          <div className="text-xs text-gray-400">{item.artist}</div>
        </div>
      </div>
      {active ? <SoundWaveIcon /> : <Play color="gray" size={18} />}
    </div>
  );
}
