import Link from "next/link";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({ title, subTitle, label, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl p-3 md:min-w-[200px] rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        {label && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{label}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {icon}
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{title}</h4>
              {subTitle && <p className="text-xs text-gray-500">{subTitle}</p>}
            </div>
          </div>
        </div>
        {href && (
          <div className="flex w-full justify-end border-t-2 border-gray-100 mt-2">
            <Link href={href} className="text-gray-500 text-xs font-medium">
              <IoEllipsisHorizontalOutline size={20} className="mt-1.5 -mb-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
