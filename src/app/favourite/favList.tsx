"use client"
import { useEffect, useState } from "react";
import { ImageType } from "./page";
import View from "./view";


const FavList = ({resources}: {resources: ImageType[]}) => {
    const [initialState, setInitialState] = useState(resources)
    useEffect(()=>{
        setInitialState(resources)
    }, [resources])
  return (
    <>
      <div className="columns-4 gap-3 mx-auto p-5 space-y-3">
        {initialState.map((item, i) => {
          return (
            <div key={i} className="break-inside-avoid">
              <View src={item.public_id} tag={item.tags} fun={(publicId: string)=>{
                setInitialState((currentState => currentState.filter((val)=> val.public_id !== publicId )))
              }}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavList;
