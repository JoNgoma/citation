import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page(props:{
  params: Promise<{citationID: string}>
}) {
  const parms = await props.params
  return (
    <Card>
      <CardHeader>
        <CardTitle>{JSON.stringify(props.params)}</CardTitle>
      </CardHeader>
    </Card>
  );
}
