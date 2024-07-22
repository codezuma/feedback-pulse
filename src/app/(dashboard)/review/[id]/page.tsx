import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div className="grid grid-cols-1  w-full max-w-2xl gap-8">
      <Card className="flex flex-col gap-6 p-6  text-card-foreground ">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">Project Owner</div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Project Name</div>
              <div className="text-sm text-muted-foreground">Acme Inc</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Start Date</div>
              <div className="text-sm text-muted-foreground">May 1, 2023</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">End Date</div>
              <div className="text-sm text-muted-foreground">June 1, 2023</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Duration</div>
              <div className="text-sm text-muted-foreground">30 days</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Status</div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                <div className="h-2 w-2 rounded-full bg-green-800" />
                Active
              </div>
            </div>

            <div className="flex flex-col space-y-1 justify-between">
                <div className="text-sm font-medium">Description</div>
                <div className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    at scelerisque urna. Sed eget odio vel nunc ultrices
                    condimentum. Nullam at scelerisque urna. Sed eget odio vel nunc
                    ultrices condimentum
                </div>
            </div>
          </div>
        </div>
        <Separator className="my-2"  />
        <div>
            <Label htmlFor="feedback" className="text-sm mb">
              Feedback
            </Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts on the project..."
              className="min-h-[100px] mt-1"
            />
          </div>
          <Button type="submit" className="justify-self-end">
            Submit Feedback
          </Button>
      </Card>
     
    </div>
  );
}
