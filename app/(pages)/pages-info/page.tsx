import PagesInfoMain from "@/components/pagesInfo/PagesInfoMain";

export default function PagesInfo(props: any) {
  props.params.getLayout = true;

  return (
    <>
      <PagesInfoMain />
    </>
  );
}
