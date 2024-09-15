/**
 * Utility type to add required children and optional className to a component
 */
export type RCProps<IncludeClassName = false> = {
	children: React.ReactNode;
} & (IncludeClassName extends true ? { className?: string } : unknown);
