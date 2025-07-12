import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function KidInvestmentCalculator() {
  const [age, setAge] = useState(3);
  const [monthly, setMonthly] = useState(150);
  const [state, setState] = useState("MD");
  const [goal, setGoal] = useState("college");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const targetAge = 18;
    const months = (targetAge - age) * 12;
    const r = 0.06 / 12;
    const futureValue = monthly * ((Math.pow(1 + r, months) - 1) / r);
    setResult(futureValue.toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <Label>Child's Current Age</Label>
            <Input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
          </div>
          <div>
            <Label>Monthly Contribution ($)</Label>
            <Input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} />
          </div>
          <div>
            <Label>Your State</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger>
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {["MD", "NY", "CA", "TX", "FL"].map((st) => (
                  <SelectItem key={st} value={st}>{st}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Goal</Label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger>
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="general">General Savings</SelectItem>
                <SelectItem value="first_home">First Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleCalculate}>Calculate</Button>
          {result && (
            <div className="text-lg font-semibold">
              {`Projected Savings by Age 18: $${result}`}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}