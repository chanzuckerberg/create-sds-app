export default function MdxLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <div className="mx-auto mt-11 flex flex-auto justify-center px-sds-xl py-sds-xxl">
      <div className="w-full max-w-content-small">{children}</div>
    </div>
  );
}
