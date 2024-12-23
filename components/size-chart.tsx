import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sizeData = [
  { size: "S", torso: "47IN", sleeve: "24.5IN", center: "25.5IN" },
  { size: "M", torso: "50IN", sleeve: "25IN", center: "27.5IN" },
  { size: "L", torso: "53IN", sleeve: "25.5IN", center: "29.5IN" },
  { size: "XL", torso: "56IN", sleeve: "26IN", center: "29.5IN" },
  { size: "2XL", torso: "59IN", sleeve: "26.5IN", center: "30.5IN" },
]

export function SizeChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Size</TableHead>
          <TableHead>Torso</TableHead>
          <TableHead>Sleeve Length</TableHead>
          <TableHead>Center Back</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sizeData.map((row) => (
          <TableRow key={row.size}>
            <TableCell className="font-medium">{row.size}</TableCell>
            <TableCell>{row.torso}</TableCell>
            <TableCell>{row.sleeve}</TableCell>
            <TableCell>{row.center}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

