import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const SectionWrapper = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full min-h-screen py-16 md:py-24 flex flex-col justify-center",
        className
      )}
    >
      <div className="container px-4 md:px-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
