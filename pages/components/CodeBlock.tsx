export interface CodeBlockProps {
    elementName: string;
    className?: string;
    children?: React.ReactNode;
  }
  
  const CodeBlock = ({ elementName, className, children }: CodeBlockProps) => {
    return (
      <div className="my-4">
        <div className="font-extrabold italic text-gray-600 text-xs hidden md:block">
          { "<" + elementName + (className ? ' class="' + className + '"' : '') + ">"}
        </div>
        <div className="pl-0 md:pl-6 border-l-0 md:border-l border-dashed border-gray-800">
          {children}
        </div>
        <div className="font-extrabold italic text-gray-600 text-xs hidden md:block">
          {"</" + elementName + ">"}
        </div>
      </div>
    );
  };
  
  export default CodeBlock;