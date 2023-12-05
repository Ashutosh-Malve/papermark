import { Separator } from "@/components/ui/separator";
import AppLayout from "@/components/layouts/app";


export default function Documents() {


  return (
    <AppLayout>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Home
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage your community

            </p>
          </div>
        
        </div>

        <Separator className="my-6 bg-gray-200 dark:bg-gray-800" />

  
      </div>
    </AppLayout>
  );
}
