import Upload from "./upload";
import cloudinary from 'cloudinary'
import View from "./view";

interface ImageType {
    public_id: string
    tags: string[]
}

const Page = async () => {
   let res = await cloudinary.v2.search
    .expression(
      "resource_type:image"
    )
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute() as {resources: ImageType[]};

  return (
    <>
    <div className="py-4 px-5 flex justify-between items-center">
      <h2 className="text-3xl font-semibold tracking-tight">Gallery</h2>
      <Upload />
    </div>
    <div className="columns-4 gap-3 mx-auto p-5 space-y-3">
        {res.resources.map((item, i)=>{
            return(
                <div key={i} className="break-inside-avoid">
                    <View src={item.public_id} tag={item.tags}/> 
                </div>
            )
        })}
    </div>
    </>
  );
};

export default Page;
