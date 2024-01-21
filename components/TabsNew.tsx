import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsCrew";

const TabsNew = () => {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsList className="space-x-5">
          <TabsTrigger value="account" />
          <TabsTrigger value="password" />
        </TabsList>
      </Tabs>
    </>
  );
};

export default TabsNew;
