import PagesCreateMain from "@/components/pagesCreate/PagesCreateMain";

export default function PagesCreate(props: any) {
  props.params.getLayout = true;

  return (
    <>
      <PagesCreateMain />
    </>
  );
}
