import React from 'react';
import './style/index.less';
import './style/btn.less';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  prefixCls?: string;
  type?: string;
  size?: 'large' | 'default' | 'small';
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  basic?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function Button(props: ButtonProps) {
  const {
    prefixCls = 'w-btn',
    type = 'light',
    size = 'default',
    active = false,
    disabled = false,
    block = false,
    basic = false,
    className,
    loading = false,
    children,
    htmlType = 'button',
    ...others
  } = props;

  const cls = [
    className,
    prefixCls,
    size ? `${prefixCls}-${size}` : false,
    type ? `${prefixCls}-${type}` : false,
    basic ? `${prefixCls}-basic` : false,
    loading ? `${prefixCls}-loading` : false,
    disabled || loading ? 'disabled' : false,
    active ? 'active' : false,
    block ? 'block' : false,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button {...others} disabled={disabled || loading} type={htmlType} className={cls}>
      {children &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) return child;
          return <span> {child} </span>;
        })}
    </button>
  );
}
