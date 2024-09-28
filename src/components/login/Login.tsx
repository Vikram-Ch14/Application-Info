import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type LoginProps = {
  setIsUserExist: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ setIsUserExist }: LoginProps) => {
  const handleCreate = () => {
    setIsUserExist(false);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
        <div className="m-2 text-center text-sm">
          Don't have an account?{" "}
          <span className="cursor-pointer" onClick={handleCreate}>
            Sign up
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
