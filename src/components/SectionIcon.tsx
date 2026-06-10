// Small engineering-themed line icons used beside section eyebrows and page
// headers. Stroke-only, sized to sit inline with uppercase labels.

export type SectionIconName =
  | "compass"
  | "gear"
  | "wrench"
  | "hardhat"
  | "caliper"
  | "ruler"
  | "mail"
  | "document";

const paths: Record<SectionIconName, React.ReactNode> = {
  // Drafting compass
  compass: (
    <>
      <circle cx="12" cy="4" r="1.6" />
      <path d="M11 5.5 5.5 20M13 5.5 18.5 20" />
      <path d="M7.5 14.5a9 9 0 0 0 9 0" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6a2 2 0 1 0 2.8 2.8l5.7-5.7a4.5 4.5 0 0 0 5.6-6L14 11.8 11.6 9.4z" />
  ),
  hardhat: (
    <>
      <path d="M4 16a8 8 0 0 1 5-7.4V12M15 12V8.6A8 8 0 0 1 20 16" />
      <path d="M9 8.6V6a3 3 0 0 1 6 0v2.6" />
      <path d="M2.5 16h19v2a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z" />
    </>
  ),
  caliper: (
    <>
      <path d="M3 4h18M3 4v4M21 4v9" />
      <path d="M3 8h4v4H5.5L3 9.5zM21 13h-4v4h1.5l2.5-2.5z" />
      <path d="M5 12v8M19 17v3" />
    </>
  ),
  ruler: (
    <>
      <rect x="2.5" y="9" width="19" height="6" rx="1" />
      <path d="M7 9v3M11 9v2M15 9v3M19 9v2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
};

export function SectionIcon({
  name,
  size = 16,
  className = "",
}: {
  name: SectionIconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
