import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SchemeDetail() {
  const { schemeId } = useParams();
  const schemes = useSelector((state) => state.schemes.list);

  const scheme = schemes.find((s) => s.schemeId === schemeId);

  if (!scheme) {
    return <div className="text-center mt-10">Scheme not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-18">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        {scheme.schemeName}
      </h1>

      <p className="text-gray-700 mb-6">{scheme.objective}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Detail label="Launch Year" value={scheme.launchYear} />
        <Detail label="Ministry" value={scheme.ministry} />
      </div>

      {scheme.benefits && (
        <>
          <h2 className="mt-8 text-xl font-semibold">Benefits</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            {scheme.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </>
      )}

      {scheme.officialWebsite && (
        <a
          href={scheme.officialWebsite}
          target="_blank"
          className="inline-block mt-6 text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Official Website
        </a>
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
