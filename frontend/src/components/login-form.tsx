import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { toast, Toaster } from "sonner"
import { useEffect, useState } from "react"
import background_image from "@/assets/background-image.webp"
import axios from "axios"
import { login } from "@/lib/services"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
      try {
        const response = await login({ email, password })
  
        const accessToken = response.data.jwt;
        // localStorage is unsafe, will change to cookies
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
      } catch (error:any) {
        setError(error.response ? error.response.data : error.message);
      }
    };

  useEffect(() => {
    toast("Account created succesfully!");
  }, []);
  return (
    <>
      <Toaster />
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-balance text-muted-foreground">
                    Login to your Fishkey account
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-destructive">{error}</p>}
                <Button type="button" onClick={handleSubmit} className="w-full">
                  Login
                </Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="/register" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </div>
            </form>
            <div className="relative hidden bg-muted md:block">
              <img
                src={background_image}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
          and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </>
  )
}
