import Image from "next/legacy/image";

export default function CenterCard({ name, city, pi, image_url }) {
  return (
    <div className="border rounded-lg shadow-md text-left">
      <div className="relative h-72 rounded-t-lg">
        <Image
          src={image_url}
          alt="name"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-xs uppercase">{city}</p>
        <h3 className="text-xl font-bold  mb-4">{name}</h3>
        <p className="text-gray-600 text-xs uppercase">
          Principal Investigator(s)
        </p>
        <p>{pi}</p>
      </div>
    </div>
  );
}
