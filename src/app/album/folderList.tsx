import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderType } from "./page";
import Link from "next/link";

const Folder = ({ folder }: { folder: FolderType }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{folder.name}</CardTitle>
          <CardDescription>
            Please click on view on button to to view the pictures present in {folder.name}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Link href={`/album/${folder.name}`}>
            <Button>View Album</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default Folder;
