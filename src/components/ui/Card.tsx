interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 bg-zinc-100">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
