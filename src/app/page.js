import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="space-y-4 space-x-7 my-20 px-4 px-20">
        <h1 className="text-3xl font-bold underline">Hello Backstage!</h1>
        <Button
          label="Get Started"
          variant="primary"
          size="medium"
          otherClasses="block w-full hover:scale-[1.02] my-5"
        />
        <Button label="Get Started" variant="primary" size="large" />
      </div>
    </>
  );
}
