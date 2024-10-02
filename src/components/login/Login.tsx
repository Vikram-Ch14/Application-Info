import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
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
import { UserDetails } from "./types";
import { userSignIn } from "@/service/HttpService";
import { Loader2 } from "lucide-react";

type LoginProps = {
  setShowLoginPage: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ setShowLoginPage }: LoginProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setUserDetails((prev: UserDetails) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSignIn = async () => {
    const { email, password } = userDetails;
    if (!email?.length || !password?.length) return;
    setIsLoading(true);
    try {
      const response = await userSignIn(email, password);
      if (response?.user?.uid) {
      }
      setIsLoading(false);
      setUserDetails((prev: UserDetails) => {
        return {
          ...prev,
          email: "",
          password: "",
        };
      });
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const handleCreate = () => {
    setShowLoginPage(false);
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
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={userDetails?.email}
              onChange={onChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={userDetails?.password}
              onChange={onChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleSignIn}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign in
          </Button>
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
