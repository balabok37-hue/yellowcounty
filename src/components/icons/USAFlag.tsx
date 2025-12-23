import { memo } from 'react';

interface USAFlagProps {
  className?: string;
}

export const USAFlag = memo(function USAFlag({ className = "w-5 h-3.5" }: USAFlagProps) {
  return (
    <svg className={className} viewBox="0 0 50 26" xmlns="http://www.w3.org/2000/svg">
      {/* Red and white stripes */}
      <rect width="50" height="26" fill="#B22234"/>
      <rect y="2" width="50" height="2" fill="#FFFFFF"/>
      <rect y="6" width="50" height="2" fill="#FFFFFF"/>
      <rect y="10" width="50" height="2" fill="#FFFFFF"/>
      <rect y="14" width="50" height="2" fill="#FFFFFF"/>
      <rect y="18" width="50" height="2" fill="#FFFFFF"/>
      <rect y="22" width="50" height="2" fill="#FFFFFF"/>
      
      {/* Blue canton */}
      <rect width="20" height="14" fill="#3C3B6E"/>
      
      {/* Stars - simplified grid pattern */}
      <g fill="#FFFFFF">
        {/* Row 1 */}
        <circle cx="2" cy="1.5" r="0.7"/>
        <circle cx="5.3" cy="1.5" r="0.7"/>
        <circle cx="8.6" cy="1.5" r="0.7"/>
        <circle cx="11.9" cy="1.5" r="0.7"/>
        <circle cx="15.2" cy="1.5" r="0.7"/>
        <circle cx="18.5" cy="1.5" r="0.7"/>
        {/* Row 2 */}
        <circle cx="3.65" cy="3.3" r="0.7"/>
        <circle cx="6.95" cy="3.3" r="0.7"/>
        <circle cx="10.25" cy="3.3" r="0.7"/>
        <circle cx="13.55" cy="3.3" r="0.7"/>
        <circle cx="16.85" cy="3.3" r="0.7"/>
        {/* Row 3 */}
        <circle cx="2" cy="5.1" r="0.7"/>
        <circle cx="5.3" cy="5.1" r="0.7"/>
        <circle cx="8.6" cy="5.1" r="0.7"/>
        <circle cx="11.9" cy="5.1" r="0.7"/>
        <circle cx="15.2" cy="5.1" r="0.7"/>
        <circle cx="18.5" cy="5.1" r="0.7"/>
        {/* Row 4 */}
        <circle cx="3.65" cy="6.9" r="0.7"/>
        <circle cx="6.95" cy="6.9" r="0.7"/>
        <circle cx="10.25" cy="6.9" r="0.7"/>
        <circle cx="13.55" cy="6.9" r="0.7"/>
        <circle cx="16.85" cy="6.9" r="0.7"/>
        {/* Row 5 */}
        <circle cx="2" cy="8.7" r="0.7"/>
        <circle cx="5.3" cy="8.7" r="0.7"/>
        <circle cx="8.6" cy="8.7" r="0.7"/>
        <circle cx="11.9" cy="8.7" r="0.7"/>
        <circle cx="15.2" cy="8.7" r="0.7"/>
        <circle cx="18.5" cy="8.7" r="0.7"/>
        {/* Row 6 */}
        <circle cx="3.65" cy="10.5" r="0.7"/>
        <circle cx="6.95" cy="10.5" r="0.7"/>
        <circle cx="10.25" cy="10.5" r="0.7"/>
        <circle cx="13.55" cy="10.5" r="0.7"/>
        <circle cx="16.85" cy="10.5" r="0.7"/>
        {/* Row 7 */}
        <circle cx="2" cy="12.3" r="0.7"/>
        <circle cx="5.3" cy="12.3" r="0.7"/>
        <circle cx="8.6" cy="12.3" r="0.7"/>
        <circle cx="11.9" cy="12.3" r="0.7"/>
        <circle cx="15.2" cy="12.3" r="0.7"/>
        <circle cx="18.5" cy="12.3" r="0.7"/>
      </g>
    </svg>
  );
});
