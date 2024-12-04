import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardCienciasPendentes from "./CardCienciasPendentes";
import CardManifestacoesPendentes from "./CardManifestacoesPendentes";
import CardNotas from "./CardNotas";
import CardPendencias from "./CardPendencias";

export default function CardsComponent({ numCols }: { numCols: number }) {
  return (
    <div className="w-full h-full ml-1 sm:p-6 overflow-y-auto sm:overflow-y-none">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1, // 1 column for small screens
          750: 2, // 2 columns for medium screens
          1024: 3, // 3 columns for larger screens
          1440: 4, // 4 columns for extra-large screens
        }}
      >
        <Masonry gutter="16px">
          <CardPendencias numCols={numCols} />
          <CardNotas numCols={numCols} />
          <CardManifestacoesPendentes numCols={numCols} />
          <CardCienciasPendentes numCols={numCols} />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
