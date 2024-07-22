"use client";
import { snapshotColumns } from "@/components/section/review/column";
import { sampleSnapshots } from "@/components/section/review/data";
import DataTable from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SnapshotsPage = () => {
  return (
    <div className="w-full">
      <header>
        <h1 className="text-2xl font-semibold">Review Snapshots</h1>
      </header>
      <div className="flex items-center py-4">
        <Input placeholder="Filter snapshots..." className="max-w-sm" />
        <div className="ml-auto space-x-4 flex">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">Duration</SelectItem>
                <SelectItem value="desc">Raised To</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTable
        columns={snapshotColumns}
        data={sampleSnapshots}
        totalPage={3}
        changePage={() => {}}
      />
    </div>
  );
};

export default SnapshotsPage;
