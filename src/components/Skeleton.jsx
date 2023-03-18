import './skeleton.css';

import { AVATAR_DEFAULT_SIZE } from '@vkontakte/vkui/dist/components/Avatar/Avatar';

export default function Skeleton({ className, style, children }) {
  return (
    <div className={`skeleton ${className}`} style={style}>
      {children}
    </div>
  );
}
export function SkeletonAvatar({ children, style }) {
  return (
    <div className="skeleton avatar" style={{ width: AVATAR_DEFAULT_SIZE, height: AVATAR_DEFAULT_SIZE, ...style }}>
      {children}
    </div>
  );
}
export function SkeletonText({ style }) {
  return <span className="skeleton text" style={style} />;
}
