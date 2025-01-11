import type { SVGProps } from "@/interfaces";

const PauseIcon: React.FC<SVGProps> = ({ className,height, width, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    width={width}
    height={height}
    {...props}
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export default PauseIcon;
