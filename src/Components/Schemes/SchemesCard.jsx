
import { useDispatch } from "react-redux";
import { selectScheme } from "../Redux/Slice/schemesSlice";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Target } from "lucide-react"; // Optional: Lucide icons for professionalism

export default function SchemeCard({ scheme }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = () => {
    dispatch(selectScheme(scheme));
    navigate(`/scheme/${scheme.schemeId}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 cursor-pointer"
    >
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-green-700 transition-colors">
            {scheme.schemeName}
          </h2>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Active
          </span>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <Target className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
            {scheme.objective}
          </p>
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
        <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
          <Calendar className="mr-1.5 h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Est. {scheme.launchYear}
          </span>
        </div>

        <div className="flex items-center font-bold text-green-600 text-sm">
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}