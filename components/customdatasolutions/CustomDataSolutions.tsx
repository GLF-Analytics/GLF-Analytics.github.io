import Image from "next/image";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Taviraj } from 'next/font/google';
import { forwardRef } from "react";
import { Check } from "lucide-react";

const taviraj_title = Taviraj({ weight: "300", subsets: ["latin"]})

type IndexProps = {
  ref?:string
}

function CustomDataSolutions(props: IndexProps){
  return (
    <div style={taviraj_title.style} className="h-[120vh] flex flex-col items-center justify-center min-h-screen">
      <div className="absolute h-[120vh] w-full">
        <Image className="object-cover brightness-75" src={"/images/arch-1.jpg"} fill={true} alt='background image'/>
      </div>
      <div className="relative bg-Eerie-black w-[70%] h-[55%] text-Magnolia flex flex-col justify-center items-center">
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
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
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
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Basic Reporting Overviews</TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Line Items Table</TableCell>
                <TableCell></TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Google Analytics Table</TableCell>
                  <TableCell></TableCell>
                  <TableCell> 
                    <div className="flex justify-center">
                      <Check/>
                    </div>
                  </TableCell>
                  <TableCell> 
                    <div className="flex justify-center">
                      <Check/>
                    </div>
                  </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Discount Codes Logic</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Advanced Reporting Overview</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell> 
                  <div className="flex justify-center">
                    <Check/>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}


// eslint-disable-next-line react/display-name
const ForwardedCustomDataSolutions = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref}>
    <CustomDataSolutions {...props}/>
  </div>
));

export default ForwardedCustomDataSolutions;