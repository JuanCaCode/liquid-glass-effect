import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const LiquidGlass = ({ children, className = "", style }: Props) => {
  return (
    <div className={`glass__container ${className}`} style={style}>
      <div className='glass__effect' />
      <div className='glass__color' />
      <div className='glass__shine' />
      <div className='glass__content'>{children}</div>
    </div>
  );
};
