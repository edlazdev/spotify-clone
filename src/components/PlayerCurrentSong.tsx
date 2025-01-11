import type { Song } from "@/interfaces";

export const PlayerCurrentSong = ({ image, title, artists }: Song) => {
  return (
    <div
      className={`
        flex items-center gap-5 relative
        overflow-hidden
      `}
    >
      {image && (
        <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
          <img src={image} alt={title} />
        </picture>
      )}
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{Array.isArray(artists) ? artists.join(", ") : artists}</span>
      </div>
    </div>
  );
};
