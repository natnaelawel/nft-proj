import React from "react";
import { Link } from "react-router-dom";

function CustomLink({ to, children, ...props }: { to: string; children: any }) {
  return (
    <Link to={to} className="" {...props}>
      {children}
    </Link>
  );
}
export default CustomLink;
