import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Form from "next/form";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Citation</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex gap-4 flex-col"
          action="/api/citations" method="POST"
        >
          <Label className="flex flex-col items-start">
            Citation
            <Input name="citation" />
          </Label>
          <Label className="flex flex-col items-start">
            Author
            <Input name="Author" />
          </Label>

          <Button type="submit">Create</Button>
        </form>
      </CardContent>
    </Card>
  );
}
