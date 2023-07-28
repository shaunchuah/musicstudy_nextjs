import Image from "next/image";

export default function NameCard({ name, position, mini }) {
  return (
    <div className="border rounded-lg px-4 py-4 shadow text-left">
      <div className="flex flex-row items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600 italic">{position}</p>
        </div>

        {mini ? (
          <div className="w-1/4">
            <Image
              src="/static/logos/minimarvel_highres.png"
              alt="MARVEL Logo"
              height="178"
              width="564"
              priority={true}
            />
          </div>
        ) : (
          <div className="w-1/5">
            <Image
              src="/static/logos/marvel_highres.png"
              alt="MARVEL Logo"
              height="178"
              width="379"
              priority={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
