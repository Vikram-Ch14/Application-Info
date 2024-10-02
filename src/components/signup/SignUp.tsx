import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createUser,
  createUserChats,
  storeUserData,
} from "@/service/HttpService";
import { UserDetails } from "./types";
import { Loader2 } from "lucide-react";

type SignUpProps = {
  setShowLoginPage: Dispatch<SetStateAction<boolean>>;
};

const SignUp = ({ setShowLoginPage }: SignUpProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    username: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setUserDetails((prevDetails: UserDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleCreate = async () => {
    const { email, password } = userDetails;
    if (!email?.length || !password?.length) return;
    setIsLoading(true);
    try {
      const user = await createUser(email, password);
      setUserId(user?.user?.uid);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const handleLogin = () => {
    setShowLoginPage(true);
  };

  useEffect(() => {
    if (!userId?.length) return;

    const { username, email } = userDetails;
    const postUserData = async (userId: string) => {
      try {
        await storeUserData(userId, username, email);

        await createUserChats(userId);
        setShowLoginPage(true);
        setIsLoading(false);
        setUserDetails((prev: UserDetails) => {
          return {
            ...prev,
            email: "",
            username: "",
            password: "",
          };
        });
        setUserId("");
      } catch (e) {
        setIsLoading(false);
        console.error(e);
      }
    };

    postUserData(userId);
  }, [userId]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Card className="w-96 max-w-screen-md">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">User Name</Label>
                <Input
                  id="first-name"
                  placeholder="UserName"
                  required
                  name="username"
                  value={userDetails?.username}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                name="email"
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
                placeholder="password"
                value={userDetails?.password}
                onChange={onChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={handleCreate}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <span className="cursor-pointer" onClick={handleLogin}>
              Sign In
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
