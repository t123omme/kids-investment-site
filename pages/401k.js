import { Card, CardContent } from "@/components/ui/card";

export default function FourOhOneKInfo() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold">When to Start a 401k</h2>
          <p>
            Starting a 401k as soon as you have earned income can give your child a big head start on retirement savings.\
            Contributions grow tax-deferred and many employers offer matching contributions.
          </p>
          <p>
            In general, once your child has a part-time job and meets age requirements of the plan, consider opening a 401k or Roth IRA for them.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
