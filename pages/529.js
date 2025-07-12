import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const DATA = {
  MD: "Up to $2,500 per beneficiary per year deductible on state taxes",
  NY: "Deduct up to $5,000 ($10,000 joint) of contributions on state taxes",
  CA: "No state tax deduction, but tax-free growth",
  TX: "No state income tax so no deduction, but tax-free growth",
  FL: "No state income tax so no deduction, but tax-free growth",
};

export default function FiveTwoNineInfo() {
  const [state, setState] = useState("MD");

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger>
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(DATA).map((st) => (
                  <SelectItem key={st} value={st}>{st}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            {DATA[state]}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
