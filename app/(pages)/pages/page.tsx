import PagesMain from "@/components/pages/PagesMain";

export default function Pages(props: any) {
  props.params.getLayout = true;

  return (
    <>
      <PagesMain />
    </>
  );
}
