import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Check } from 'lucide-react';

const CustomTable = () => {
  return (
    <div className="relative bg-Eerie-black max-w-[1200px] rounded-xl w-[70%] h-[60vh] text-Magnolia flex flex-col justify-center items-center">
      <h2 className="text-center text-5xl">Custom Data Solutions</h2>
      <div className="pt-6 text-center">
        <Table className="overflow-hidden text-2xl">
          <TableCaption>Click option to see table items</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Option Name</TableHead>
              <TableHead>Option 1: Overviews</TableHead>
              <TableHead>Option 2: Overviews +</TableHead>
              <TableHead>Option 3: Full Build</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Time to completion</TableCell>
              <TableCell>3 weeks</TableCell>
              <TableCell>4 weeks</TableCell>
              <TableCell>6 weeks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Popover>
                  <PopoverTrigger>Orders Table</PopoverTrigger>
                  <PopoverContent></PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Popover>
                  <PopoverTrigger>Retention Table</PopoverTrigger>
                  <PopoverContent></PopoverContent>
                </Popover>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Basic Reporting Overviews</TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Line Items Table</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Analytics Table</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discount Codes Logic</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Advanced Reporting Overview</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomTable;