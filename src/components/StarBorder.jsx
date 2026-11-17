import React from "react";

const StarBorder = ({ as: Tag = "button", className = "", color = "#ffffff, #333333, #ffffff", speed = "6s", children, ...rest }) => (
  <Tag className={`star-border ${className}`} {...rest}>
    <div
      className="star-border__glow"
      style={{ background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`, animationDuration: speed }}
    />
    <div className="star-border__inner">{children}</div>
  </Tag>
);

export default StarBorder;