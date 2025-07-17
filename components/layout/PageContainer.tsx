interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`container mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
} 