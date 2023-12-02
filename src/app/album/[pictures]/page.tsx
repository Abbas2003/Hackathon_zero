import cloudinary from "cloudinary";
import View from "./view";

interface ImageType {
  public_id: string;
  tags: string[];
}

const Page = async ({ params }: { params: { pictures: string } }) => {
  let res = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.pictures}`)
    .sort_by("created_at", "desc")
    .max_results(5)
    .with_field("tags")
    .execute()) as { resources: ImageType[] };

  return (
    <>
      <div className="py-4 px-5">
        <h2 className="text-3xl font-semibold tracking-tight">{`Album Name: ${params.pictures}`}</h2>
      </div>
      <div className="columns-4 gap-3 mx-auto p-5 space-y-3">
        {res.resources.map((item, i) => {
          return (
            <div key={i} className="break-inside-avoid">
              <View src={item.public_id} tag={item.tags} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
