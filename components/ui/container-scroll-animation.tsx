import React from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center relative p-2 md:p-20">
      <div className="py-10 md:py-20 w-full relative">
        <Header titleComponent={titleComponent} />
        <Card>{children}</Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: { titleComponent: React.ReactNode }) => {
  return <div className="max-w-5xl mx-auto text-center">{titleComponent}</div>;
};

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        boxShadow:
          "0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl">
        {children}
      </div>
    </div>
  );
};
