export default async function Page({ params }: any) {

  const { id } = await params;
  console.log("id", id);

  return (
    <>
      <h1>User Form</h1>
      <p>Not implemented yet</p>
      <p>TODO -&gt; Finish Angular automated user form and then port code to React</p>
    </>
  );
}
