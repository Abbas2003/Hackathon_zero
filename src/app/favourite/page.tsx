import cloudinary from "cloudinary";
import FavList from "./favList";

export interface ImageType {
  public_id: string;
  tags: string[];
}

const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .max_results(5)
    .with_field("tags")
    .execute()) as { resources: ImageType[] };

  return (
    <>
      <div className="py-4 px-5 flex justify-between items-center">
        <h2 className="text-3xl font-semibold tracking-tight">Favourite</h2>
      </div>
      <div className="flex sm:flex-col-reverse flex-wrap">
      <FavList resources={res.resources} />
      </div>
    </>
  );
};

export default Page;
