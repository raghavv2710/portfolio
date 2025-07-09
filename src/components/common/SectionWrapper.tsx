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
        "w-full min-h-screen py-20 md:py-32 flex flex-col justify-center",
        className
      )}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
};

export default SectionWrapper;
