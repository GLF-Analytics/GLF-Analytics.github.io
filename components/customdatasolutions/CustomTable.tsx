import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Check } from "lucide-react";

const CustomTable = () => {
  return (
    <div className="relative flex h-[93vh] sm:max-h-[600px] xl:max-h-[900px] max-w-[1200px] flex-col items-center justify-center bg-Eerie-black text-Magnolia sm:h-[45%] sm:w-[75%] sm:rounded-xl xl:h-[50%]">
      <h2 className="text-center text-3xl pb-6 xl:text-5xl">
        Custom Data Solutions
      </h2>
      <div className="text-center sm:px-8">
        <Table className="overflow-hidden xl:text-2xl">
          <TableCaption>Hover over option to see table items</TableCaption>
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
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Orders Table</TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>order_id</p>
                      <p>date_ordered</p>
                      <p>order_total</p>
                      <p>discount_total</p>
                      <p>shipping_total</p>
                      <p>customer_id</p>
                      <p>order_status</p>
                      <p>customer_type</p>
                      <p>date_week</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Retention Table</TooltipTrigger>
                    <TooltipContent
                      sticky="always"
                      side="bottom"
                      className="xl:text-2xl"
                    >
                      <p>order_id</p>
                      <p>date_ordered</p>
                      <p>order_total</p>
                      <p>discount_total</p>
                      <p>shipping_total</p>
                      <p>customer_id</p>
                      <p>order_status</p>
                      <p>customer_type</p>
                      <p>date_first_purchase</p>
                      <p>retained_30_days</p>
                      <p>retained_90_days</p>
                      <p>retained_180_days</p>
                      <p>retained_360_days</p>
                      <p>date_week</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Basic Reporting Overviews</TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>month</p>
                      <p>unique orders</p>
                      <p>sales</p>
                      <p>aov</p>
                      <p>unique orders - new</p>
                      <p>sales - new</p>
                      <p>aov - new</p>
                      <p>unique orders - returning</p>
                      <p>sales - returning</p>
                      <p>aovv - returning</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Line Items Table</TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>order_id</p>
                      <p>date_ordered</p>
                      <p>order_total</p>
                      <p>discount_total</p>
                      <p>shipping_total</p>
                      <p>customer_id</p>
                      <p>order_status</p>
                      <p>customer_type</p>
                      <p>item_total</p>
                      <p>item_quantity</p>
                      <p>item_name</p>
                      <p>item_price</p>
                      <p>date_week</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
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
              <TableCell>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Google Analytics Table</TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>total_revenue</p>
                      <p>conversions</p>
                      <p>date_ordered</p>
                      <p>total_users</p>
                      <p>sessions</p>
                      <p>date_week</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
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
              <TableCell>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>Discount Codes Logic</TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>order_id</p>
                      <p>date_ordered</p>
                      <p>order_total</p>
                      <p>discount_total</p>
                      <p>shipping_total</p>
                      <p>customer_id</p>
                      <p>order_status</p>
                      <p>customer_type</p>
                      <p>date_first_purchase</p>
                      <p>retained_30_days</p>
                      <p>retained_90_days</p>
                      <p>retained_180_days</p>
                      <p>retained_360_days</p>
                      <p>date_week</p>
                      <p>code_purchaser</p>
                      <p>code_name</p>
                      <p>acquired_via_code</p>
                      <p>orders_count_all_time</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Check />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      Advanced Reporting Overviews
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="xl:text-2xl">
                      <p>date-year-month</p>
                      <p>total spend</p>
                      <p>new customers</p>
                      <p>total revenue</p>
                      <p>cac</p>
                      <p>roi</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
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
