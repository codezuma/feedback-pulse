import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MessageCircleReplyIcon, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Snapshot } from "./data"; // Make sure this import matches your data structure
import Link from "next/link";

const calculateDuration = (start: Date, end: Date): number => {
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const snapshotColumns: ColumnDef<Snapshot>[] = [
  {
    accessorKey: "raisedFrom",
    header: "Raised From",
    cell: ({ row }) => {
      const raisedFrom = row.getValue("raisedFrom") as { avatar: string; name: string };
      return (
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={raisedFrom.avatar} alt={raisedFrom.name} />
            <AvatarFallback>{raisedFrom.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{raisedFrom.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "projectName",
    header: "Project Name",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => {
      return new Date(row.getValue("startDate")).toLocaleDateString();
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => {
      const start = new Date(row.getValue("startDate"));
      const end = new Date(); // Assuming duration is calculated up to current date
      const duration = calculateDuration(start, end);
      return `${duration} days`;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'reviewed' ? 'bg-green-100 text-green-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const snapshot = row.original;
      return (
        <Link href={`/review/${snapshot.id}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Review snapshot", snapshot.id)}
          disabled={snapshot.status === "reviewed"}
        >
          <MessageCircleReplyIcon size={20} className="mr-2" />
          Review
        </Button>
        </Link>
      );
    },
  },
];