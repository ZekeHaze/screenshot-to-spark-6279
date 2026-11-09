import { HandHeart, Heart, Leaf } from "lucide-react";

const qualities = [
  { label: "Artesanal", icon: HandHeart },
  { label: "100% natural", icon: Leaf },
  { label: "Vegano y libre de crueldad animal", icon: Heart },
];

export function ProductQualities() {
  return (
    <ul role="list" aria-label="Atributos de Limonson" className="mt-5 flex flex-wrap gap-2">
      {qualities.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-background px-3 py-1.5 text-sm font-bold text-lime"
        >
          <Icon aria-hidden="true" className="size-4 shrink-0" />
          {label}
        </li>
      ))}
    </ul>
  );
}
