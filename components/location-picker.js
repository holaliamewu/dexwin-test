import { locationsData } from "../utils/site-data";

export default function LocationPicker({
  openLocationMenu,
  location: currentLocation,
  setLocation,
}) {
  return (
    <div
      className="absolute top-full left-0 rounded-lg border border-gray-200 shadow-lg z-20 min-w-[160px] overflow-hidden mt-2 bg-white"
    >
      {locationsData.map((location) => (
        <button
          onClick={() => {
            setLocation(location.country);
            openLocationMenu(false);

          }}
          key={location.country}
          className={`flex w-full gap-3 px-4 py-3 text-black hover:bg-gray-50 font-medium ${
            currentLocation === location.country ? "bg-green-100" : ""
          }`}
        >
          <img
            src={location.img}
            alt={`${location.country} flag`}
            className="w-6"
          />
          {location.country}
        </button>
      ))}
    </div>
  );
}
