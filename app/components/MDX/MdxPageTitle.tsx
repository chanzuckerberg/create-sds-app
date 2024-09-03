import { ReactNode } from "react";

export function MdxPageTitle({
  children,
  lastModified,
}: {
  children: ReactNode;
  lastModified: string;
}) {
  return (
    <div className="flex flex-col gap-sds-xs mb-sds-xxl">
      <h1 className="text-sds-header-xxl leading-sds-header-xxl font-semibold">
        {children}
      </h1>

      {!!lastModified && (
        <p className="text-sds-body-xxs leading-sds-body-xxs text-sds-color-primitive-gray-600">
          Last Updated: {lastModified}
        </p>
      )}
    </div>
  );
}
