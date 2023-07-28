import Image from "next/image";

export default function MarvelCenterCard({ name, city, pi, image_url }) {
  return (
    <div className="border rounded-lg px-4 py-4 shadow-sm text-left">
      {/* <div className="relative h-72 rounded-lg mb-4">
        <Image
          src={image_url}
          alt="name"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div> */}
      <div>
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
