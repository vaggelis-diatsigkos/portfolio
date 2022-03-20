const CodeHeader: React.FC<{ header: string }> = ({ header }) => {
  return (
    <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl flex items-center justify-between">
      <div className="w-full border-y-2 border-dashed border-gray-700"></div>
      <div className="mx-4">
        {"{"}
        {header}
        {"}"}
      </div>
      <div className="w-full border-y-2 border-dashed border-gray-700"></div>
    </h2>
  );
};

export default CodeHeader;
