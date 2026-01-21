import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";

const NavLink = forwardRef(
  ({ className = "", activeClassName = "", pendingClassName = "", to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          let combinedClass = className;
          if (isActive) combinedClass += ` ${activeClassName}`;
          if (isPending) combinedClass += ` ${pendingClassName}`;
          return combinedClass.trim();
        }}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
