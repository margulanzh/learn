import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}
function Search({ onChange }: SearchProps) {
  console.log("Search component");
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
export default memo(Search);
